import { Current } from './current'
import { Forecast } from './forecast'

export interface WeatherInfo {
  current?: Current
  forecasts?: Forecast[]
}
