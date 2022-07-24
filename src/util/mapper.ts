import { Current } from '../models/current';
import { Forecast } from '../models/forecast';

export const mapCurrent = (data: any): Current => {
  if (!data) {
    return null as unknown as Current;
  }

  return {
    date: new Date(data.LocalObservationDateTime),
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

export const mapForecasts = (data: any[]): Forecast[] => {
  if (!data || !Array.isArray(data)) {
    return null as unknown as Forecast[];
  }
  return data.map((d) => mapForecast(d));
};

const mapForecast = (data: any): Forecast => {
  if (!data) {
    return null as unknown as Forecast;
  }
  return {
    date: new Date(data.Date),
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
