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

export interface WindDirection {
  degrees: number;
  localized: string;
}

export interface Wind {
  direction: WindDirection;
  speed: Scale;
}

export interface CurrentWeather {
  date: string;
  weatherDetail: WeatherDetail;
  temperature: Scale;
  precipitation: Scale;
  humidity: number;
  wind: Wind;
}

export interface TemperatureRange {
  minimum: Unit;
  maximum: Unit;
}

export interface Forecast {
  date: string;
  dayDetail: WeatherDetail;
  nightDetail: WeatherDetail;
  temperatureRange: TemperatureRange;
}

export interface WeatherPayload {
  locationName: string;
  locationKey: string;
  current: CurrentWeather;
  forecasts: Forecast[];
}

export interface WeatherResponse {
  weather: WeatherPayload;
}

export interface WeatherVariables {
  location: string;
  metric: boolean;
}

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

export interface AskAiResponse {
  askAi: string;
}

export interface AskAiVariables {
  question: string;
  weather: WeatherContextInput | null;
}
