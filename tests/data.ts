import { Current } from '../src/models/current';
import { Forecast } from '../src/models/forecast';

export const current: Current = {
  date: new Date('2022-07-17'),
  weatherDetail: {
    icon: 35,
    text: 'Partly Cloudy'
  },
  temperature: {
    metric: {
      value: 8.2,
      unit: 'C'
    },
    imperial: {
      value: 30,
      unit: 'F'
    }
  },
  precipitation: {
    metric: {
      value: 10,
      unit: 'mm'
    },
    imperial: {
      value: 0.4,
      unit: 'in'
    }
  },
  humidity: 60,
  wind: {
    direction: {
      degrees: 255,
      localized: 'SW'
    },
    speed: {
      metric: {
        value: 10,
        unit: 'kmh'
      },
      imperial: {
        value: 6,
        unit: 'mih'
      }
    }
  }
};

export const forecast: Forecast = {
  date: new Date('2022-07-17'),

  dayDetail: {
    icon: 18,
    text: 'Sunny'
  },
  nightDetail: {
    icon: 35,
    text: 'Partly Cloudy'
  },
  temperatureRange: {
    minimum: {
      value: 6.2,
      unit: 'C'
    },
    maximum: {
      value: 18,
      unit: 'C'
    }
  }
};
