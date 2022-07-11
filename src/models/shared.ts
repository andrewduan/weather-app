export interface Unit {
  value: number
  unit: string
}

export interface Scale {
  metric: Unit
  imperial: Unit
}

export interface WeatherDetail {
  icon: number
  text: string
}
