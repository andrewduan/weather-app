import { Current } from '../src/models/current';
import { Forecast } from '../src/models/forecast';

export const current: Current = {
  date: new Date('2022-07-17'),
  weatherDetail: {
    icon: 35,
    text: 'Partly Cloudy',
  },
  temperature: {
    metric: {
      value: 8.2,
      unit: 'C',
    },
    imperial: {
      value: 30,
      unit: 'F',
    },
  },
  precipitation: {
    metric: {
      value: 10,
      unit: 'mm',
    },
    imperial: {
      value: 0.4,
      unit: 'in',
    },
  },
  humidity: 60,
  wind: {
    direction: {
      degrees: 255,
      localized: 'SW',
    },
    speed: {
      metric: {
        value: 10,
        unit: 'kmh',
      },
      imperial: {
        value: 6,
        unit: 'mih',
      },
    },
  },
};

export const forecast: Forecast = {
  date: new Date('2022-07-17'),

  dayDetail: {
    icon: 18,
    text: 'Sunny',
  },
  nightDetail: {
    icon: 35,
    text: 'Partly Cloudy',
  },
  temperatureRange: {
    minimum: {
      value: 6.2,
      unit: 'C',
    },
    maximum: {
      value: 18,
      unit: 'C',
    },
  },
};

export const mockMelbourneLocationData: any[] = [
  {
    Key: 26126,
    LocalizedName: 'Melbourne',
  },
];

export const mockMelbourneForecastsData = {
  DailyForecasts: [
    {
      Date: '2022-07-05T07:00:00+10:00',
      EpochDate: 1656968400,
      Temperature: {
        Minimum: {
          Value: 6.1,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 12.8,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: false,
        ShortPhrase: 'Clouds and sun',
        LongPhrase: 'Intervals of clouds and sunshine',
        PrecipitationProbability: 17,
        ThunderstormProbability: 0,
        RainProbability: 17,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 13.0,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 175,
            Localized: 'S',
            English: 'S',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 61,
        Evapotranspiration: {
          Value: 1.0,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 2670.6,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Night: {
        Icon: 34,
        IconPhrase: 'Mostly clear',
        HasPrecipitation: false,
        ShortPhrase: 'Clear to partly cloudy',
        LongPhrase: 'Clear to partly cloudy',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 13.0,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 47,
            Localized: 'NE',
            English: 'NE',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 23,
        Evapotranspiration: {
          Value: 0.3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=1&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=1&unit=c&lang=en-us',
    },
    {
      Date: '2022-07-06T07:00:00+10:00',
      EpochDate: 1657054800,
      Temperature: {
        Minimum: {
          Value: 6.9,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 16.1,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
        ShortPhrase: 'Mostly sunny',
        LongPhrase: 'Mostly sunny',
        PrecipitationProbability: 1,
        ThunderstormProbability: 0,
        RainProbability: 1,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 13.0,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 304,
            Localized: 'NW',
            English: 'NW',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 10,
        Evapotranspiration: {
          Value: 1.5,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 5183.2,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Patchy clouds',
        LongPhrase: 'Patchy clouds',
        PrecipitationProbability: 3,
        ThunderstormProbability: 0,
        RainProbability: 3,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 9.3,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 318,
            Localized: 'NW',
            English: 'NW',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 46,
        Evapotranspiration: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=2&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=2&unit=c&lang=en-us',
    },
    {
      Date: '2022-07-07T07:00:00+10:00',
      EpochDate: 1657141200,
      Temperature: {
        Minimum: {
          Value: 7.9,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 13.2,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 14,
        IconPhrase: 'Partly sunny w/ showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
        ShortPhrase: 'Some sun with a few showers',
        LongPhrase: 'Sunshine and some clouds with a couple of showers around, mainly late in the day',
        PrecipitationProbability: 71,
        ThunderstormProbability: 14,
        RainProbability: 71,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 18.5,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 223,
            Localized: 'SW',
            English: 'SW',
          },
        },
        Rain: {
          Value: 2.2,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 1.5,
        HoursOfRain: 1.5,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 42,
        Evapotranspiration: {
          Value: 1.3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 3794.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Night: {
        Icon: 12,
        IconPhrase: 'Showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
        ShortPhrase: 'A shower or two late',
        LongPhrase: 'Cloudy most of the time with a passing shower or two late',
        PrecipitationProbability: 65,
        ThunderstormProbability: 13,
        RainProbability: 65,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 18.5,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 248,
            Localized: 'WSW',
            English: 'WSW',
          },
        },
        Rain: {
          Value: 1.8,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 1.0,
        HoursOfRain: 1.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 83,
        Evapotranspiration: {
          Value: 0.3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=3&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=3&unit=c&lang=en-us',
    },
    {
      Date: '2022-07-08T07:00:00+10:00',
      EpochDate: 1657227600,
      Temperature: {
        Minimum: {
          Value: 7.1,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 13.1,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 12,
        IconPhrase: 'Showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
        ShortPhrase: 'Rain and drizzle in the a.m.',
        LongPhrase: 'Mostly cloudy; rain and drizzle in the morning followed by a passing shower in the afternoon',
        PrecipitationProbability: 86,
        ThunderstormProbability: 17,
        RainProbability: 86,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 22.2,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 245,
            Localized: 'WSW',
            English: 'WSW',
          },
        },
        Rain: {
          Value: 3.3,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 3.0,
        HoursOfRain: 3.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 85,
        Evapotranspiration: {
          Value: 1.0,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 2395.4,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Night: {
        Icon: 39,
        IconPhrase: 'Partly cloudy w/ showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
        ShortPhrase: 'Breezy with showers around',
        LongPhrase: 'Partly cloudy and breezy with a couple of showers',
        PrecipitationProbability: 84,
        ThunderstormProbability: 17,
        RainProbability: 84,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 22.2,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 238,
            Localized: 'WSW',
            English: 'WSW',
          },
        },
        Rain: {
          Value: 2.4,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 2.0,
        HoursOfRain: 2.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 70,
        Evapotranspiration: {
          Value: 0.3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=4&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=4&unit=c&lang=en-us',
    },
    {
      Date: '2022-07-09T07:00:00+10:00',
      EpochDate: 1657314000,
      Temperature: {
        Minimum: {
          Value: 4.7,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 13.6,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
        ShortPhrase: 'Mostly sunny',
        LongPhrase: 'Mostly sunny',
        PrecipitationProbability: 6,
        ThunderstormProbability: 0,
        RainProbability: 6,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 16.7,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 209,
            Localized: 'SSW',
            English: 'SSW',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 19,
        Evapotranspiration: {
          Value: 1.3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 5462.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Night: {
        Icon: 38,
        IconPhrase: 'Mostly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Increasing cloudiness',
        LongPhrase: 'Increasing cloudiness',
        PrecipitationProbability: 1,
        ThunderstormProbability: 0,
        RainProbability: 1,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 9.3,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 269,
            Localized: 'W',
            English: 'W',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 42,
        Evapotranspiration: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=5&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=5&unit=c&lang=en-us',
    },
  ],
};

export const mockMelbourneCurrentData = [
  {
    LocalObservationDateTime: '2022-07-05T18:55:00+10:00',
    EpochTime: 1657011300,
    WeatherText: 'Partly cloudy',
    WeatherIcon: 35,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: {
        Value: 7.8,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 46.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    RelativeHumidity: 75,
    IndoorRelativeHumidity: 34,
    DewPoint: {
      Metric: {
        Value: 3.9,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 39.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    Wind: {
      Direction: {
        Degrees: 225,
        Localized: 'SW',
        English: 'SW',
      },
      Speed: {
        Metric: {
          Value: 7.4,
          Unit: 'km/h',
          UnitType: 7,
        },
        Imperial: {
          Value: 4.6,
          Unit: 'mi/h',
          UnitType: 9,
        },
      },
    },
    UVIndex: 0,
    UVIndexText: 'Low',
    Visibility: {
      Metric: {
        Value: 16.1,
        Unit: 'km',
        UnitType: 6,
      },
      Imperial: {
        Value: 10.0,
        Unit: 'mi',
        UnitType: 2,
      },
    },
    ObstructionsToVisibility: '',
    CloudCover: 35,
    Ceiling: {
      Metric: {
        Value: 12192.0,
        Unit: 'm',
        UnitType: 5,
      },
      Imperial: {
        Value: 40000.0,
        Unit: 'ft',
        UnitType: 0,
      },
    },
    Pressure: {
      Metric: {
        Value: 1024.0,
        Unit: 'mb',
        UnitType: 14,
      },
      Imperial: {
        Value: 30.24,
        Unit: 'inHg',
        UnitType: 12,
      },
    },
    PressureTendency: {
      LocalizedText: 'Steady',
      Code: 'S',
    },
    Past24HourTemperatureDeparture: {
      Metric: {
        Value: -3.3,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: -6.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    ApparentTemperature: {
      Metric: {
        Value: 9.4,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 49.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    WindChillTemperature: {
      Metric: {
        Value: 6.7,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 44.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    WetBulbTemperature: {
      Metric: {
        Value: 6.1,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 43.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    Precip1hr: {
      Metric: {
        Value: 0.0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0.0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    PrecipitationSummary: {
      Precipitation: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
    },
    MobileLink: 'http://www.accuweather.com/en/au/melbourne/26216/current-weather/26216?lang=en-us',
    Link: 'http://www.accuweather.com/en/au/melbourne/26216/current-weather/26216?lang=en-us',
  },
];

export const mockSydneyLocationData: any[] = [
  {
    Key: 26637,
    LocalizedName: 'Sydney',
  },
];

export const mockSydneyMetricForecastsData = {
  DailyForecasts: [
    {
      Date: '2022-07-05T07:00:00+10:00',
      EpochDate: 1656968400,
      Temperature: {
        Minimum: {
          Value: 7.3,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 13.7,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: false,
        ShortPhrase: 'Clouds and sun',
        LongPhrase: 'Intervals of clouds and sunshine',
        PrecipitationProbability: 17,
        ThunderstormProbability: 0,
        RainProbability: 17,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 13.0,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 175,
            Localized: 'S',
            English: 'S',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 61,
        Evapotranspiration: {
          Value: 1.0,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 2670.6,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Night: {
        Icon: 34,
        IconPhrase: 'Mostly clear',
        HasPrecipitation: false,
        ShortPhrase: 'Clear to partly cloudy',
        LongPhrase: 'Clear to partly cloudy',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 13.0,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 47,
            Localized: 'NE',
            English: 'NE',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 23,
        Evapotranspiration: {
          Value: 0.3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=1&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=1&unit=c&lang=en-us',
    },
    {
      Date: '2022-07-06T07:00:00+10:00',
      EpochDate: 1657054800,
      Temperature: {
        Minimum: {
          Value: 6.9,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 16.1,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
        ShortPhrase: 'Mostly sunny',
        LongPhrase: 'Mostly sunny',
        PrecipitationProbability: 1,
        ThunderstormProbability: 0,
        RainProbability: 1,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 13.0,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 304,
            Localized: 'NW',
            English: 'NW',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 10,
        Evapotranspiration: {
          Value: 1.5,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 5183.2,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Patchy clouds',
        LongPhrase: 'Patchy clouds',
        PrecipitationProbability: 3,
        ThunderstormProbability: 0,
        RainProbability: 3,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 9.3,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 318,
            Localized: 'NW',
            English: 'NW',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 46,
        Evapotranspiration: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=2&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=2&unit=c&lang=en-us',
    },
    {
      Date: '2022-07-07T07:00:00+10:00',
      EpochDate: 1657141200,
      Temperature: {
        Minimum: {
          Value: 7.9,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 13.2,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 14,
        IconPhrase: 'Partly sunny w/ showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
        ShortPhrase: 'Some sun with a few showers',
        LongPhrase: 'Sunshine and some clouds with a couple of showers around, mainly late in the day',
        PrecipitationProbability: 71,
        ThunderstormProbability: 14,
        RainProbability: 71,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 18.5,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 223,
            Localized: 'SW',
            English: 'SW',
          },
        },
        Rain: {
          Value: 2.2,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 1.5,
        HoursOfRain: 1.5,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 42,
        Evapotranspiration: {
          Value: 1.3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 3794.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Night: {
        Icon: 12,
        IconPhrase: 'Showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
        ShortPhrase: 'A shower or two late',
        LongPhrase: 'Cloudy most of the time with a passing shower or two late',
        PrecipitationProbability: 65,
        ThunderstormProbability: 13,
        RainProbability: 65,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 18.5,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 248,
            Localized: 'WSW',
            English: 'WSW',
          },
        },
        Rain: {
          Value: 1.8,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 1.0,
        HoursOfRain: 1.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 83,
        Evapotranspiration: {
          Value: 0.3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=3&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=3&unit=c&lang=en-us',
    },
    {
      Date: '2022-07-08T07:00:00+10:00',
      EpochDate: 1657227600,
      Temperature: {
        Minimum: {
          Value: 7.1,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 13.1,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 12,
        IconPhrase: 'Showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
        ShortPhrase: 'Rain and drizzle in the a.m.',
        LongPhrase: 'Mostly cloudy; rain and drizzle in the morning followed by a passing shower in the afternoon',
        PrecipitationProbability: 86,
        ThunderstormProbability: 17,
        RainProbability: 86,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 22.2,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 245,
            Localized: 'WSW',
            English: 'WSW',
          },
        },
        Rain: {
          Value: 3.3,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 3.0,
        HoursOfRain: 3.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 85,
        Evapotranspiration: {
          Value: 1.0,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 2395.4,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Night: {
        Icon: 39,
        IconPhrase: 'Partly cloudy w/ showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
        ShortPhrase: 'Breezy with showers around',
        LongPhrase: 'Partly cloudy and breezy with a couple of showers',
        PrecipitationProbability: 84,
        ThunderstormProbability: 17,
        RainProbability: 84,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 22.2,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 238,
            Localized: 'WSW',
            English: 'WSW',
          },
        },
        Rain: {
          Value: 2.4,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 2.0,
        HoursOfRain: 2.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 70,
        Evapotranspiration: {
          Value: 0.3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=4&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=4&unit=c&lang=en-us',
    },
    {
      Date: '2022-07-09T07:00:00+10:00',
      EpochDate: 1657314000,
      Temperature: {
        Minimum: {
          Value: 4.7,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 13.6,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
        ShortPhrase: 'Mostly sunny',
        LongPhrase: 'Mostly sunny',
        PrecipitationProbability: 6,
        ThunderstormProbability: 0,
        RainProbability: 6,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 16.7,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 209,
            Localized: 'SSW',
            English: 'SSW',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 19,
        Evapotranspiration: {
          Value: 1.3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 5462.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Night: {
        Icon: 38,
        IconPhrase: 'Mostly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Increasing cloudiness',
        LongPhrase: 'Increasing cloudiness',
        PrecipitationProbability: 1,
        ThunderstormProbability: 0,
        RainProbability: 1,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 9.3,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 269,
            Localized: 'W',
            English: 'W',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 42,
        Evapotranspiration: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=5&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=5&unit=c&lang=en-us',
    },
  ],
};

export const mockSydneyImperialForecastsData = {
  DailyForecasts: [
    {
      Date: '2022-07-05T07:00:00+10:00',
      EpochDate: 1656968400,
      Temperature: {
        Minimum: {
          Value: 27.5,
          Unit: 'F',
          UnitType: 17,
        },
        Maximum: {
          Value: 33.7,
          Unit: 'F',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: false,
        ShortPhrase: 'Clouds and sun',
        LongPhrase: 'Intervals of clouds and sunshine',
        PrecipitationProbability: 17,
        ThunderstormProbability: 0,
        RainProbability: 17,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 8.3,
            Unit: 'mi/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 175,
            Localized: 'S',
            English: 'S',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 61,
        Evapotranspiration: {
          Value: 1.0,
          Unit: 'in',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 1670.6,
          Unit: 'W/in²',
          UnitType: 33,
        },
      },
      Night: {
        Icon: 34,
        IconPhrase: 'Mostly clear',
        HasPrecipitation: false,
        ShortPhrase: 'Clear to partly cloudy',
        LongPhrase: 'Clear to partly cloudy',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 7.8,
            Unit: 'mi/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 47,
            Localized: 'NE',
            English: 'NE',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 23,
        Evapotranspiration: {
          Value: 0.3,
          Unit: 'in',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0.0,
          Unit: 'W/in²',
          UnitType: 33,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=1&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=1&unit=c&lang=en-us',
    },
    {
      Date: '2022-07-06T07:00:00+10:00',
      EpochDate: 1657054800,
      Temperature: {
        Minimum: {
          Value: 26.9,
          Unit: 'F',
          UnitType: 17,
        },
        Maximum: {
          Value: 46.1,
          Unit: 'F',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
        ShortPhrase: 'Mostly sunny',
        LongPhrase: 'Mostly sunny',
        PrecipitationProbability: 1,
        ThunderstormProbability: 0,
        RainProbability: 1,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 8.1,
            Unit: 'mi/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 304,
            Localized: 'NW',
            English: 'NW',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 10,
        Evapotranspiration: {
          Value: 0.1,
          Unit: 'in',
          UnitType: 3,
        },
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Patchy clouds',
        LongPhrase: 'Patchy clouds',
        PrecipitationProbability: 3,
        ThunderstormProbability: 0,
        RainProbability: 3,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 5.9,
            Unit: 'mi/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 318,
            Localized: 'NW',
            English: 'NW',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 46,
        Evapotranspiration: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 3,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=2&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=2&unit=c&lang=en-us',
    },
    {
      Date: '2022-07-07T07:00:00+10:00',
      EpochDate: 1657141200,
      Temperature: {
        Minimum: {
          Value: 37.9,
          Unit: 'F',
          UnitType: 17,
        },
        Maximum: {
          Value: 53.2,
          Unit: 'F',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 14,
        IconPhrase: 'Partly sunny w/ showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
        ShortPhrase: 'Some sun with a few showers',
        LongPhrase: 'Sunshine and some clouds with a couple of showers around, mainly late in the day',
        PrecipitationProbability: 71,
        ThunderstormProbability: 14,
        RainProbability: 71,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 11.3,
            Unit: 'mi/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 223,
            Localized: 'SW',
            English: 'SW',
          },
        },
        Rain: {
          Value: 0.1,
          Unit: 'in',
          UnitType: 3,
        },
        HoursOfPrecipitation: 1.5,
        HoursOfRain: 1.5,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 42,
        Evapotranspiration: {
          Value: 0.1,
          Unit: 'in',
          UnitType: 3,
        },
      },
      Night: {
        Icon: 12,
        IconPhrase: 'Showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
        ShortPhrase: 'A shower or two late',
        LongPhrase: 'Cloudy most of the time with a passing shower or two late',
        PrecipitationProbability: 65,
        ThunderstormProbability: 13,
        RainProbability: 65,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 10.5,
            Unit: 'mi/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 248,
            Localized: 'WSW',
            English: 'WSW',
          },
        },
        Rain: {
          Value: 0.1,
          Unit: 'in',
          UnitType: 3,
        },
        HoursOfPrecipitation: 1.0,
        HoursOfRain: 1.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 83,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=3&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=3&unit=c&lang=en-us',
    },
    {
      Date: '2022-07-08T07:00:00+10:00',
      EpochDate: 1657227600,
      Temperature: {
        Minimum: {
          Value: 17.1,
          Unit: 'F',
          UnitType: 17,
        },
        Maximum: {
          Value: 33.1,
          Unit: 'F',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 12,
        IconPhrase: 'Showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
        ShortPhrase: 'Rain and drizzle in the a.m.',
        LongPhrase: 'Mostly cloudy; rain and drizzle in the morning followed by a passing shower in the afternoon',
        PrecipitationProbability: 86,
        ThunderstormProbability: 17,
        RainProbability: 86,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 18.2,
            Unit: 'mi/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 245,
            Localized: 'WSW',
            English: 'WSW',
          },
        },
        Rain: {
          Value: 0.13,
          Unit: 'in',
          UnitType: 3,
        },
        HoursOfPrecipitation: 3.0,
        HoursOfRain: 3.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 85,
      },
      Night: {
        Icon: 39,
        IconPhrase: 'Partly cloudy w/ showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
        ShortPhrase: 'Breezy with showers around',
        LongPhrase: 'Partly cloudy and breezy with a couple of showers',
        PrecipitationProbability: 84,
        ThunderstormProbability: 17,
        RainProbability: 84,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 18.1,
            Unit: 'mi/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 238,
            Localized: 'WSW',
            English: 'WSW',
          },
        },
        Rain: {
          Value: 0.15,
          Unit: 'in',
          UnitType: 3,
        },
        HoursOfPrecipitation: 2.0,
        HoursOfRain: 2.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 70,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=4&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=4&unit=c&lang=en-us',
    },
    {
      Date: '2022-07-09T07:00:00+10:00',
      EpochDate: 1657314000,
      Temperature: {
        Minimum: {
          Value: 14.7,
          Unit: 'F',
          UnitType: 17,
        },
        Maximum: {
          Value: 43.6,
          Unit: 'F',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
        ShortPhrase: 'Mostly sunny',
        LongPhrase: 'Mostly sunny',
        PrecipitationProbability: 6,
        ThunderstormProbability: 0,
        RainProbability: 6,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 10.5,
            Unit: 'mi/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 209,
            Localized: 'SSW',
            English: 'SSW',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 3,
        },
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 19,
      },
      Night: {
        Icon: 38,
        IconPhrase: 'Mostly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Increasing cloudiness',
        LongPhrase: 'Increasing cloudiness',
        PrecipitationProbability: 1,
        ThunderstormProbability: 0,
        RainProbability: 1,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 6,
            Unit: 'mi/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 269,
            Localized: 'W',
            English: 'W',
          },
        },
        Rain: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 42,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=5&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=5&unit=c&lang=en-us',
    },
  ],
};

export const mockSydneyCurrentData = [
  {
    LocalObservationDateTime: '2022-07-05T18:55:00+10:00',
    EpochTime: 1657011300,
    WeatherText: 'Partly cloudy',
    WeatherIcon: 35,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: {
        Value: 8.4,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 46.2,
        Unit: 'F',
        UnitType: 18,
      },
    },
    RelativeHumidity: 75,
    IndoorRelativeHumidity: 34,
    DewPoint: {
      Metric: {
        Value: 3.9,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 39.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    Wind: {
      Direction: {
        Degrees: 225,
        Localized: 'SW',
        English: 'SW',
      },
      Speed: {
        Metric: {
          Value: 7.4,
          Unit: 'km/h',
          UnitType: 7,
        },
        Imperial: {
          Value: 4.6,
          Unit: 'mi/h',
          UnitType: 9,
        },
      },
    },
    UVIndex: 0,
    UVIndexText: 'Low',
    Visibility: {
      Metric: {
        Value: 16.1,
        Unit: 'km',
        UnitType: 6,
      },
      Imperial: {
        Value: 10.0,
        Unit: 'mi',
        UnitType: 2,
      },
    },
    ObstructionsToVisibility: '',
    CloudCover: 35,
    Ceiling: {
      Metric: {
        Value: 12192.0,
        Unit: 'm',
        UnitType: 5,
      },
      Imperial: {
        Value: 40000.0,
        Unit: 'ft',
        UnitType: 0,
      },
    },
    Pressure: {
      Metric: {
        Value: 1024.0,
        Unit: 'mb',
        UnitType: 14,
      },
      Imperial: {
        Value: 30.24,
        Unit: 'inHg',
        UnitType: 12,
      },
    },
    PressureTendency: {
      LocalizedText: 'Steady',
      Code: 'S',
    },
    Past24HourTemperatureDeparture: {
      Metric: {
        Value: -3.3,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: -6.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    ApparentTemperature: {
      Metric: {
        Value: 9.4,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 49.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    WindChillTemperature: {
      Metric: {
        Value: 6.7,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 44.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    WetBulbTemperature: {
      Metric: {
        Value: 6.1,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 43.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    Precip1hr: {
      Metric: {
        Value: 0.0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0.0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    PrecipitationSummary: {
      Precipitation: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
    },
    MobileLink: 'http://www.accuweather.com/en/au/melbourne/26216/current-weather/26216?lang=en-us',
    Link: 'http://www.accuweather.com/en/au/melbourne/26216/current-weather/26216?lang=en-us',
  },
];
