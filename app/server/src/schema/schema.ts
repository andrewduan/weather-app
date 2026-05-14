export const typeDefs = `#graphql
  type Unit {
    value: Float!
    unit: String!
  }

  type Scale {
    metric: Unit!
    imperial: Unit!
  }

  type WeatherDetail {
    icon: Int!
    text: String!
  }

  type WindDirection {
    degrees: Int!
    localized: String!
  }

  type Wind {
    direction: WindDirection!
    speed: Scale!
  }

  type CurrentWeather {
    date: String!
    weatherDetail: WeatherDetail!
    temperature: Scale!
    precipitation: Scale!
    humidity: Int!
    wind: Wind!
  }

  type TemperatureRange {
    minimum: Unit!
    maximum: Unit!
  }

  type Forecast {
    date: String!
    dayDetail: WeatherDetail!
    nightDetail: WeatherDetail!
    temperatureRange: TemperatureRange!
  }

  type WeatherPayload {
    locationName: String!
    locationKey: String!
    current: CurrentWeather!
    forecasts: [Forecast!]!
  }

  input WeatherContextInput {
    locationName: String!
    conditionText: String!
    temperatureC: Float!
    temperatureF: Float!
    humidity: Int!
    precipitationMm: Float!
    windSpeedKmh: Float!
    windDirection: String!
    observedAt: String!
    forecastSummary: String!
  }

  type Query {
    weather(location: String!, metric: Boolean = true): WeatherPayload!
    askAi(question: String!, weather: WeatherContextInput): String!
  }
`;
