import Anthropic from "@anthropic-ai/sdk";

export interface WeatherContextInput {
  locationName: string;
  conditionText: string;
  temperatureC: number;
  temperatureF: number;
  humidity: number;
  precipitationMm: number;
  windSpeedKmh: number;
  windDirection: string;
  observedAt: string;
  forecastSummary: string;
}

export interface AskAiArgs {
  question: string;
  weather: WeatherContextInput | null;
  historicalContext: string | null;
  apiKey: string | undefined;
}

export interface ExtractHistoricalQueryArgs {
  question: string;
  fallbackLocation: string | null;
  apiKey: string | undefined;
}

export interface HistoricalQuery {
  location: string;
  month: number;
  day?: number;
}

const SYSTEM_PROMPT = `You are an assistant embedded in a weather web app. The user is viewing a 5-day forecast and may ask follow-up questions.

When current weather context is provided, ground your answer in it. When it isn't, answer from general knowledge and say so briefly.

When historical weather records are provided, treat them as the authoritative basis for any climatological estimate. Summarize the patterns you see (typical highs/lows, precipitation, dominant conditions) for that location and time of year. Make clear up front that this is an estimate based on historical patterns for that location and time of year, NOT a real forecast — actual weather can vary substantially.

If the user asks about expected weather on a future date or month that is beyond the standard 5-day forecast horizon and no historical records are provided, give a CLIMATOLOGICAL ESTIMATE from general knowledge and say so.

Keep replies concise (2-4 sentences for casual questions, longer only when the user asks for detail). Use plain text suitable for a small panel — no markdown headings, no code fences.`;

const EXTRACTOR_SYSTEM_PROMPT = `You extract a location and a target date from a user's weather question. Respond with ONLY a JSON object on a single line — no prose, no code fences.

Schema: {"location": string, "month": integer 1-12, "day": integer 1-31 | null}

Rules:
- "location" is the place the user is asking about. If the question doesn't name one, use the fallback location provided in the user message.
- "month" is the month the question is about. If the question doesn't specify, use the current month given in the user message.
- "day" is the specific day if the question names one (e.g. "May 15", "next Tuesday" → resolve to date). Otherwise null.
- Never return null for location or month. Always return valid JSON.`;

const formatWeatherContext = (weather: WeatherContextInput): string => {
  return [
    `Location: ${weather.locationName}`,
    `Observed at: ${weather.observedAt}`,
    `Conditions: ${weather.conditionText}`,
    `Temperature: ${Math.round(weather.temperatureC)}°C / ${Math.round(weather.temperatureF)}°F`,
    `Humidity: ${weather.humidity}%`,
    `Precipitation: ${weather.precipitationMm} mm`,
    `Wind: ${weather.windDirection} at ${Math.round(weather.windSpeedKmh)} km/h`,
    `Forecast: ${weather.forecastSummary}`,
  ].join("\n");
};

const extractText = (content: Anthropic.ContentBlock[]): string =>
  content
    .filter((block): block is Anthropic.TextBlock => block.type === "text")
    .map((block) => block.text)
    .join("\n")
    .trim();

export const extractHistoricalQuery = async ({
  question,
  fallbackLocation,
  apiKey,
}: ExtractHistoricalQueryArgs): Promise<HistoricalQuery> => {
  if (!apiKey) {
    throw new Error("Missing ANTHROPIC_API_KEY in server environment.");
  }

  const client = new Anthropic({ apiKey });
  const now = new Date();
  const currentMonth = now.getUTCMonth() + 1;
  const today = now.toISOString().slice(0, 10);

  const userContent = [
    `Today's date: ${today}`,
    `Current month: ${currentMonth}`,
    `Fallback location: ${fallbackLocation ?? "(none — infer from question or use a major city the question implies)"}`,
    "",
    `Question: ${question}`,
  ].join("\n");

  const response = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 256,
    system: [
      {
        type: "text",
        text: EXTRACTOR_SYSTEM_PROMPT,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [{ role: "user", content: userContent }],
  });

  const raw = extractText(response.content);
  console.log("raw data from question extraction", raw);
  let parsed: { location?: unknown; month?: unknown; day?: unknown };
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error(`Could not parse extractor response as JSON: ${raw.slice(0, 200)}`);
  }

  const location =
    typeof parsed.location === "string" && parsed.location.trim().length > 0
      ? parsed.location.trim()
      : fallbackLocation;
  if (!location) {
    throw new Error("Could not determine a location for historical lookup.");
  }

  const month =
    typeof parsed.month === "number" && Number.isInteger(parsed.month)
      ? parsed.month
      : currentMonth;
  if (month < 1 || month > 12) {
    throw new Error(`Extractor returned invalid month: ${month}`);
  }

  const day =
    typeof parsed.day === "number" && Number.isInteger(parsed.day) && parsed.day >= 1 && parsed.day <= 31
      ? parsed.day
      : undefined;

  return { location, month, day };
};

export const askAi = async ({
  question,
  weather,
  historicalContext,
  apiKey,
}: AskAiArgs): Promise<string> => {
  if (!apiKey) {
    throw new Error("Missing ANTHROPIC_API_KEY in server environment.");
  }

  const client = new Anthropic({ apiKey });
  const today = new Date().toISOString().slice(0, 10);

  const parts: string[] = [`Today's date: ${today}`];
  if (weather) {
    parts.push("", "Current weather context:", formatWeatherContext(weather));
  }
  if (historicalContext) {
    parts.push("", "Historical weather records (Open-Meteo archive):", historicalContext);
  }
  parts.push("", `Question: ${question}`);
  const userContent = parts.join("\n");

  console.log("userContent", userContent);

  const response = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 1024,
    system: [
      {
        type: "text",
        text: SYSTEM_PROMPT,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [{ role: "user", content: userContent }],
  });

  return extractText(response.content) || "(no response)";
};
