const GEOCODE_URL = "https://geocoding-api.open-meteo.com/v1/search";
const ARCHIVE_URL = "https://archive-api.open-meteo.com/v1/archive";

interface OpenMeteoGeoResponse {
  results?: Array<{
    latitude: number;
    longitude: number;
    name: string;
    country?: string;
    admin1?: string;
  }>;
}

interface OpenMeteoArchiveResponse {
  daily?: {
    time?: string[];
    temperature_2m_max?: (number | null)[];
    temperature_2m_min?: (number | null)[];
    precipitation_sum?: (number | null)[];
    weathercode?: (number | null)[];
    windspeed_10m_max?: (number | null)[];
  };
}

export interface HistoricalDay {
  date: string;
  maxTempC: number | null;
  minTempC: number | null;
  precipitationMm: number | null;
  windSpeedMaxKmh: number | null;
  weatherCode: number | null;
}

export interface HistoricalWeatherResult {
  resolvedLocation: string;
  latitude: number;
  longitude: number;
  yearsCovered: string;
  records: HistoricalDay[];
}

export interface FetchHistoricalArgs {
  location: string;
  month: number;
  day?: number;
}

const pad = (n: number) => String(n).padStart(2, "0");

const lastDayOfMonth = (year: number, month: number): number =>
  new Date(year, month, 0).getDate();

const fetchJson = async <T>(url: string): Promise<T> => {
  console.log("fetching json from", url);
  const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
  console.log("fetchJson response", res.status);
  if (!res.ok) {
    const body = await res.text();
    console.log("fetchJson error", body);
    throw new Error(`Open-Meteo request failed (${res.status}): ${body.slice(0, 200)}`);
  }
  return res.json() as Promise<T>;
};

const geocodeOnce = async (name: string) => {
  console.log("geocoding", name);
  const url = `${GEOCODE_URL}?name=${encodeURIComponent(name)}&count=1&format=json`;
  const data = await fetchJson<OpenMeteoGeoResponse>(url);
  console.log("geocode result", data);
  return data.results?.[0];
};

const geocode = async (location: string) => {
  const candidates = [location];
  const firstSegment = location.split(",")[0]?.trim();
  if (firstSegment && firstSegment !== location) candidates.push(firstSegment);

  for (const candidate of candidates) {
    const hit = await geocodeOnce(candidate);
    if (hit) return hit;
  }
  throw new Error(
    `Could not geocode location "${location}" (tried: ${candidates.join(" | ")}).`,
  );
};

const WEATHER_CODE_TEXT: Record<number, string> = {
  0: "Clear",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  71: "Slight snow",
  73: "Moderate snow",
  75: "Heavy snow",
  77: "Snow grains",
  80: "Slight showers",
  81: "Moderate showers",
  82: "Violent showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm w/ slight hail",
  99: "Thunderstorm w/ heavy hail",
};

export const describeWeatherCode = (code: number | null): string => {
  if (code === null || code === undefined) return "unknown";
  return WEATHER_CODE_TEXT[code] ?? `code ${code}`;
};

export const fetchHistoricalWeather = async ({
  location,
  month,
  day,
}: FetchHistoricalArgs): Promise<HistoricalWeatherResult> => {

  console.log("fetching historical weather for", location, month, day);
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    throw new Error("month must be an integer 1-12.");
  }
  if (day !== undefined && (!Number.isInteger(day) || day < 1 || day > 31)) {
    throw new Error("day must be an integer 1-31 when provided.");
  }

  const place = await geocode(location);
  console.log("geocode result", place);
  const currentYear = new Date().getUTCFullYear();
  const startYear = currentYear - 5;
  const endYear = currentYear - 1;

  const records: HistoricalDay[] = [];

  for (let year = startYear; year <= endYear; year++) {
    let startDate: string;
    let endDate: string;
    if (day !== undefined) {
      const safeDay = Math.min(day, lastDayOfMonth(year, month));
      startDate = `${year}-${pad(month)}-${pad(safeDay)}`;
      endDate = startDate;
    } else {
      startDate = `${year}-${pad(month)}-01`;
      endDate = `${year}-${pad(month)}-${pad(lastDayOfMonth(year, month))}`;
    }

    console.log("startDate", startDate);
    console.log("endDate", endDate);

    const archiveUrl =
      `${ARCHIVE_URL}?latitude=${place.latitude}&longitude=${place.longitude}` +
      `&start_date=${startDate}&end_date=${endDate}` +
      `&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode,windspeed_10m_max` +
      `&timezone=auto`;

    try {
      const archive = await fetchJson<OpenMeteoArchiveResponse>(archiveUrl);

      console.log("archive weather data", archive);
      const times = archive.daily?.time ?? [];
      for (let i = 0; i < times.length; i++) {
        records.push({
          date: times[i],
          maxTempC: archive.daily?.temperature_2m_max?.[i] ?? null,
          minTempC: archive.daily?.temperature_2m_min?.[i] ?? null,
          precipitationMm: archive.daily?.precipitation_sum?.[i] ?? null,
          windSpeedMaxKmh: archive.daily?.windspeed_10m_max?.[i] ?? null,
          weatherCode: archive.daily?.weathercode?.[i] ?? null,
        });
      }
    } catch (err) {
      console.error(`[historical-weather] year ${year} failed:`, (err as Error).message);
    }
  }

  if (records.length === 0) {
    throw new Error(
      `Open-Meteo returned no historical records for "${location}" (${startYear}-${endYear}).`,
    );
  }

  const resolvedName = [place.name, place.admin1, place.country]
    .filter((part): part is string => Boolean(part))
    .join(", ");

  return {
    resolvedLocation: resolvedName,
    latitude: place.latitude,
    longitude: place.longitude,
    yearsCovered: `${startYear}-${endYear}`,
    records,
  };
};

export const summarizeHistoricalRecords = (result: HistoricalWeatherResult): string => {
  const lines: string[] = [];
  lines.push(
    `Resolved location: ${result.resolvedLocation} (${result.latitude.toFixed(2)}, ${result.longitude.toFixed(2)})`,
  );
  lines.push(`Years covered: ${result.yearsCovered}`);
  lines.push(`Daily records (${result.records.length} total):`);
  for (const r of result.records) {
    const tmax = r.maxTempC !== null ? `${r.maxTempC.toFixed(1)}°C` : "n/a";
    const tmin = r.minTempC !== null ? `${r.minTempC.toFixed(1)}°C` : "n/a";
    const pcp = r.precipitationMm !== null ? `${r.precipitationMm.toFixed(1)}mm` : "n/a";
    const wind = r.windSpeedMaxKmh !== null ? `${r.windSpeedMaxKmh.toFixed(0)}km/h` : "n/a";
    lines.push(
      `${r.date}: min ${tmin}, max ${tmax}, precip ${pcp}, max wind ${wind}, ${describeWeatherCode(r.weatherCode)}`,
    );
  }
  return lines.join("\n");
};
