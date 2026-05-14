import { gql } from "@apollo/client";

export const ASK_AI = gql`
  query AskAi($question: String!, $weather: WeatherContextInput) {
    askAi(question: $question, weather: $weather)
  }
`;

export const GET_WEATHER = gql`
  query GetWeather($location: String!, $metric: Boolean!) {
    weather(location: $location, metric: $metric) {
      locationName
      locationKey
      current {
        date
        weatherDetail {
          icon
          text
        }
        temperature {
          metric {
            value
            unit
          }
          imperial {
            value
            unit
          }
        }
        precipitation {
          metric {
            value
            unit
          }
          imperial {
            value
            unit
          }
        }
        humidity
        wind {
          direction {
            degrees
            localized
          }
          speed {
            metric {
              value
              unit
            }
            imperial {
              value
              unit
            }
          }
        }
      }
      forecasts {
        date
        dayDetail {
          icon
          text
        }
        nightDetail {
          icon
          text
        }
        temperatureRange {
          minimum {
            value
            unit
          }
          maximum {
            value
            unit
          }
        }
      }
    }
  }
`;
