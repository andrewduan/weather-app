import { Unit, WeatherDetail } from "./shared";

export interface TemperatureRange {
  minimum: Unit;
  maximum: Unit;
}


export interface Forecast {
    date: Date;
    dayDetail: WeatherDetail;
    nightDetail: WeatherDetail;
    temperatureRange: TemperatureRange;
}