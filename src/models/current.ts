import { Scale, WeatherDetail } from './shared';

export interface Direction {
  degrees: number;
  localized: string;
}

export interface Wind {
  direction: Direction;
  speed: Scale;
}

export interface Current {
  date: Date;
  weatherDetail: WeatherDetail;
  temperature: Scale;
  precipitation: Scale;
  humidity: number;
  wind: Wind;
}
