import { fetchWeatherByLocation, WeatherPayload } from "../../weather-service.js";
import { askAi, extractHistoricalQuery, WeatherContextInput } from "../apis/ai-service.js";
import { fetchHistoricalWeather, summarizeHistoricalRecords } from "../apis/historical-weather.js";
import { detectPii } from "../utils/pii.js";

interface WeatherArgs {
  location: string;
  metric: boolean;
}

interface AskAiArgs {
  question: string;
  weather: WeatherContextInput | null;
}

interface ResolverContext {
  apiKey: string | undefined;
  anthropicKey: string | undefined;
}

export const resolvers = {
  Query: {
    weather: async (
      _: unknown,
      args: WeatherArgs,
      context: ResolverContext
    ): Promise<WeatherPayload> => {
      return fetchWeatherByLocation({
        location: args.location,
        metric: args.metric,
        apiKey: context.apiKey,
      });
    },
    askAi: async (
      _: unknown,
      args: AskAiArgs,
      context: ResolverContext
    ): Promise<string> => {
      const pii = detectPii(args.question);
      if (!pii.ok) {
        throw new Error(pii.reason);
      }

      const query = await extractHistoricalQuery({
        question: args.question,
        fallbackLocation: args.weather?.locationName ?? null,
        apiKey: context.anthropicKey,
      });

      const historical = await fetchHistoricalWeather({
        location: query.location,
        month: query.month,
        day: query.day,
      });
      const historicalContext = summarizeHistoricalRecords(historical);

      return askAi({
        question: args.question,
        weather: args.weather,
        historicalContext,
        apiKey: context.anthropicKey,
      });
    },
  },
};
