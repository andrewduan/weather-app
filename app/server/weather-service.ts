const ACCUWEATHER_BASE_URL = "http://dataservice.accuweather.com";

interface UnitValue {
  Value: number;
  Unit: string;
}

interface MetricImperial {
  Metric: UnitValue;
  Imperial: UnitValue;
}

interface AccuWeatherCurrent {
  LocalObservationDateTime: string;
  WeatherIcon: number;
  WeatherText: string;
  Temperature: MetricImperial;
  PrecipitationSummary: {
    Precipitation: MetricImperial;
  };
  RelativeHumidity: number;
  Wind: {
    Direction: {
      Degrees: number;
      English: string;
    };
    Speed: MetricImperial;
  };
}

interface AccuWeatherForecast {
  Date: string;
  Day: { Icon: number; IconPhrase: string };
  Night: { Icon: number; IconPhrase: string };
  Temperature: {
    Minimum: UnitValue;
    Maximum: UnitValue;
  };
}

interface AccuWeatherForecastResponse {
  DailyForecasts?: AccuWeatherForecast[];
}

interface AccuWeatherLocation {
  Key: string;
  LocalizedName: string;
}

export interface Unit {
  value: number;
  unit: string;
}

export interface Scale {
  metric: Unit;
  imperial: Unit;
}

export interface WeatherDetail {
  icon: number;
  text: string;
}

export interface CurrentWeather {
  date: string;
  weatherDetail: WeatherDetail;
  temperature: Scale;
  precipitation: Scale;
  humidity: number;
  wind: {
    direction: { degrees: number; localized: string };
    speed: Scale;
  };
}

export interface Forecast {
  date: string;
  dayDetail: WeatherDetail;
  nightDetail: WeatherDetail;
  temperatureRange: {
    minimum: Unit;
    maximum: Unit;
  };
}

export interface WeatherPayload {
  locationName: string;
  locationKey: string;
  current: CurrentWeather;
  forecasts: Forecast[];
}

export interface FetchWeatherArgs {
  location: string;
  metric: boolean;
  apiKey: string | undefined;
}

const mapCurrent = (data: AccuWeatherCurrent): CurrentWeather => {
  return {
    date: data.LocalObservationDateTime,
    weatherDetail: {
      icon: data.WeatherIcon,
      text: data.WeatherText,
    },
    temperature: {
      metric: {
        value: data.Temperature.Metric.Value,
        unit: data.Temperature.Metric.Unit,
      },
      imperial: {
        value: data.Temperature.Imperial.Value,
        unit: data.Temperature.Imperial.Unit,
      },
    },
    precipitation: {
      metric: {
        value: data.PrecipitationSummary.Precipitation.Metric.Value,
        unit: data.PrecipitationSummary.Precipitation.Metric.Unit,
      },
      imperial: {
        value: data.PrecipitationSummary.Precipitation.Imperial.Value,
        unit: data.PrecipitationSummary.Precipitation.Imperial.Unit,
      },
    },
    humidity: data.RelativeHumidity,
    wind: {
      direction: {
        degrees: data.Wind.Direction.Degrees,
        localized: data.Wind.Direction.English,
      },
      speed: {
        metric: {
          value: data.Wind.Speed.Metric.Value,
          unit: data.Wind.Speed.Metric.Unit,
        },
        imperial: {
          value: data.Wind.Speed.Imperial.Value,
          unit: data.Wind.Speed.Imperial.Unit,
        },
      },
    },
  };
};

const mapForecast = (data: AccuWeatherForecast): Forecast => {
  return {
    date: data.Date,
    dayDetail: {
      icon: data.Day.Icon,
      text: data.Day.IconPhrase,
    },
    nightDetail: {
      icon: data.Night.Icon,
      text: data.Night.IconPhrase,
    },
    temperatureRange: {
      minimum: {
        value: data.Temperature.Minimum.Value,
        unit: data.Temperature.Minimum.Unit,
      },
      maximum: {
        value: data.Temperature.Maximum.Value,
        unit: data.Temperature.Maximum.Unit,
      },
    },
  };
};

const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`AccuWeather request failed (${response.status}): ${errorText}`);
  }
  return response.json() as Promise<T>;
};

export const fetchWeatherByLocation = async ({
  location,
  metric,
  apiKey,
}: FetchWeatherArgs): Promise<WeatherPayload> => {
  if (!apiKey) {
    throw new Error("Missing ACCUWEATHER_API_KEY in server environment.");
  }

  const encodedLocation = encodeURIComponent(location);
  const locationCandidates = await fetchJson<AccuWeatherLocation[]>(
    `${ACCUWEATHER_BASE_URL}/locations/v1/cities/search?apikey=${apiKey}&q=${encodedLocation}`
  );

  if (!Array.isArray(locationCandidates) || locationCandidates.length === 0) {
    throw new Error(`No locations found for "${location}".`);
  }

  const bestMatch = locationCandidates[0];
  const locationKey = bestMatch.Key;
  const locationName = bestMatch.LocalizedName;

  const [currentRaw, forecastRaw] = await Promise.all([
    fetchJson<AccuWeatherCurrent[]>(
      `${ACCUWEATHER_BASE_URL}/currentconditions/v1/${locationKey}?apikey=${apiKey}&details=true`
    ),
    fetchJson<AccuWeatherForecastResponse>(
      `${ACCUWEATHER_BASE_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&details=true&metric=${metric}`
    ),
  ]);

  if (!Array.isArray(currentRaw) || currentRaw.length === 0) {
    throw new Error(`No current weather data returned for "${locationName}".`);
  }

  return {
    locationName,
    locationKey,
    current: mapCurrent(currentRaw[0]),
    forecasts: (forecastRaw.DailyForecasts || []).map(mapForecast),
  };
};
