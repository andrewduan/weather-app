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

export const mockLocationData: any[] = [
  {
    Key: 26126,
    LocalizedName: 'Melbourne'
  }
];

export const mockForecastsData = {
  Headline: {
    EffectiveDate: '2022-07-17T07:00:00+10:00',
    EffectiveEpochDate: 1657141200,
    Severity: 5,
    Text: 'Expect showers Thursday',
    Category: 'rain',
    EndDate: '2022-07-07T19:00:00+10:00',
    EndEpochDate: 1657184400,
    MobileLink: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?unit=c&lang=en-us',
    Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?unit=c&lang=en-us'
  },
  DailyForecasts: [
    {
      Date: '2022-07-05T07:00:00+10:00',
      EpochDate: 1656968400,
      Sun: {
        Rise: '2022-07-05T07:36:00+10:00',
        EpochRise: 1656970560,
        Set: '2022-07-05T17:13:00+10:00',
        EpochSet: 1657005180
      },
      Moon: {
        Rise: '2022-07-05T11:22:00+10:00',
        EpochRise: 1656984120,
        Set: '2022-07-05T22:55:00+10:00',
        EpochSet: 1657025700,
        Phase: 'WaxingCrescent',
        Age: 6
      },
      Temperature: {
        Minimum: {
          Value: 6.1,
          Unit: 'C',
          UnitType: 17
        },
        Maximum: {
          Value: 12.8,
          Unit: 'C',
          UnitType: 17
        }
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 3.0,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Cold'
        },
        Maximum: {
          Value: 12.4,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Cool'
        }
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 3.0,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Cold'
        },
        Maximum: {
          Value: 11.1,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Cool'
        }
      },
      HoursOfSun: 3.5,
      DegreeDaySummary: {
        Heating: {
          Value: 9.0,
          Unit: 'C',
          UnitType: 17
        },
        Cooling: {
          Value: 0.0,
          Unit: 'C',
          UnitType: 17
        }
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: 'Good',
          CategoryValue: 1,
          Type: 'Ozone'
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'UVIndex',
          Value: 2,
          Category: 'Low',
          CategoryValue: 1
        }
      ],
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
            UnitType: 7
          },
          Direction: {
            Degrees: 175,
            Localized: 'S',
            English: 'S'
          }
        },
        WindGust: {
          Speed: {
            Value: 29.6,
            Unit: 'km/h',
            UnitType: 7
          },
          Direction: {
            Degrees: 190,
            Localized: 'S',
            English: 'S'
          }
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 61,
        Evapotranspiration: {
          Value: 1.0,
          Unit: 'mm',
          UnitType: 3
        },
        SolarIrradiance: {
          Value: 2670.6,
          Unit: 'W/m²',
          UnitType: 33
        }
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
            UnitType: 7
          },
          Direction: {
            Degrees: 47,
            Localized: 'NE',
            English: 'NE'
          }
        },
        WindGust: {
          Speed: {
            Value: 16.7,
            Unit: 'km/h',
            UnitType: 7
          },
          Direction: {
            Degrees: 190,
            Localized: 'S',
            English: 'S'
          }
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 23,
        Evapotranspiration: {
          Value: 0.3,
          Unit: 'mm',
          UnitType: 3
        },
        SolarIrradiance: {
          Value: 0.0,
          Unit: 'W/m²',
          UnitType: 33
        }
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=1&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=1&unit=c&lang=en-us'
    },
    {
      Date: '2022-07-06T07:00:00+10:00',
      EpochDate: 1657054800,
      Sun: {
        Rise: '2022-07-06T07:36:00+10:00',
        EpochRise: 1657056960,
        Set: '2022-07-06T17:14:00+10:00',
        EpochSet: 1657091640
      },
      Moon: {
        Rise: '2022-07-06T11:46:00+10:00',
        EpochRise: 1657071960,
        Set: '2022-07-06T23:58:00+10:00',
        EpochSet: 1657115880,
        Phase: 'WaxingCrescent',
        Age: 7
      },
      Temperature: {
        Minimum: {
          Value: 6.9,
          Unit: 'C',
          UnitType: 17
        },
        Maximum: {
          Value: 16.1,
          Unit: 'C',
          UnitType: 17
        }
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 5.5,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Chilly'
        },
        Maximum: {
          Value: 16.2,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Cool'
        }
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 5.5,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Chilly'
        },
        Maximum: {
          Value: 14.5,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Cool'
        }
      },
      HoursOfSun: 9.3,
      DegreeDaySummary: {
        Heating: {
          Value: 7.0,
          Unit: 'C',
          UnitType: 17
        },
        Cooling: {
          Value: 0.0,
          Unit: 'C',
          UnitType: 17
        }
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: 'Good',
          CategoryValue: 1,
          Type: 'Ozone'
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'UVIndex',
          Value: 2,
          Category: 'Low',
          CategoryValue: 1
        }
      ],
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
            UnitType: 7
          },
          Direction: {
            Degrees: 304,
            Localized: 'NW',
            English: 'NW'
          }
        },
        WindGust: {
          Speed: {
            Value: 25.9,
            Unit: 'km/h',
            UnitType: 7
          },
          Direction: {
            Degrees: 328,
            Localized: 'NNW',
            English: 'NNW'
          }
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 10,
        Evapotranspiration: {
          Value: 1.5,
          Unit: 'mm',
          UnitType: 3
        },
        SolarIrradiance: {
          Value: 5183.2,
          Unit: 'W/m²',
          UnitType: 33
        }
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
            UnitType: 7
          },
          Direction: {
            Degrees: 318,
            Localized: 'NW',
            English: 'NW'
          }
        },
        WindGust: {
          Speed: {
            Value: 20.4,
            Unit: 'km/h',
            UnitType: 7
          },
          Direction: {
            Degrees: 264,
            Localized: 'W',
            English: 'W'
          }
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 46,
        Evapotranspiration: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        SolarIrradiance: {
          Value: 0.0,
          Unit: 'W/m²',
          UnitType: 33
        }
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=2&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=2&unit=c&lang=en-us'
    },
    {
      Date: '2022-07-07T07:00:00+10:00',
      EpochDate: 1657141200,
      Sun: {
        Rise: '2022-07-07T07:36:00+10:00',
        EpochRise: 1657143360,
        Set: '2022-07-07T17:14:00+10:00',
        EpochSet: 1657178040
      },
      Moon: {
        Rise: '2022-07-07T12:11:00+10:00',
        EpochRise: 1657159860,
        Set: '2022-07-08T01:02:00+10:00',
        EpochSet: 1657206120,
        Phase: 'First',
        Age: 8
      },
      Temperature: {
        Minimum: {
          Value: 7.9,
          Unit: 'C',
          UnitType: 17
        },
        Maximum: {
          Value: 13.2,
          Unit: 'C',
          UnitType: 17
        }
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 1.8,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Cold'
        },
        Maximum: {
          Value: 11.2,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Cool'
        }
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 1.8,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Cold'
        },
        Maximum: {
          Value: 9.4,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Chilly'
        }
      },
      HoursOfSun: 5.7,
      DegreeDaySummary: {
        Heating: {
          Value: 7.0,
          Unit: 'C',
          UnitType: 17
        },
        Cooling: {
          Value: 0.0,
          Unit: 'C',
          UnitType: 17
        }
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: 'Good',
          CategoryValue: 1,
          Type: 'Ozone'
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'UVIndex',
          Value: 2,
          Category: 'Low',
          CategoryValue: 1
        }
      ],
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
            UnitType: 7
          },
          Direction: {
            Degrees: 223,
            Localized: 'SW',
            English: 'SW'
          }
        },
        WindGust: {
          Speed: {
            Value: 40.7,
            Unit: 'km/h',
            UnitType: 7
          },
          Direction: {
            Degrees: 198,
            Localized: 'SSW',
            English: 'SSW'
          }
        },
        TotalLiquid: {
          Value: 2.2,
          Unit: 'mm',
          UnitType: 3
        },
        Rain: {
          Value: 2.2,
          Unit: 'mm',
          UnitType: 3
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        HoursOfPrecipitation: 1.5,
        HoursOfRain: 1.5,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 42,
        Evapotranspiration: {
          Value: 1.3,
          Unit: 'mm',
          UnitType: 3
        },
        SolarIrradiance: {
          Value: 3794.0,
          Unit: 'W/m²',
          UnitType: 33
        }
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
            UnitType: 7
          },
          Direction: {
            Degrees: 248,
            Localized: 'WSW',
            English: 'WSW'
          }
        },
        WindGust: {
          Speed: {
            Value: 31.5,
            Unit: 'km/h',
            UnitType: 7
          },
          Direction: {
            Degrees: 228,
            Localized: 'SW',
            English: 'SW'
          }
        },
        TotalLiquid: {
          Value: 1.8,
          Unit: 'mm',
          UnitType: 3
        },
        Rain: {
          Value: 1.8,
          Unit: 'mm',
          UnitType: 3
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        HoursOfPrecipitation: 1.0,
        HoursOfRain: 1.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 83,
        Evapotranspiration: {
          Value: 0.3,
          Unit: 'mm',
          UnitType: 3
        },
        SolarIrradiance: {
          Value: 0.0,
          Unit: 'W/m²',
          UnitType: 33
        }
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=3&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=3&unit=c&lang=en-us'
    },
    {
      Date: '2022-07-08T07:00:00+10:00',
      EpochDate: 1657227600,
      Sun: {
        Rise: '2022-07-08T07:35:00+10:00',
        EpochRise: 1657229700,
        Set: '2022-07-08T17:15:00+10:00',
        EpochSet: 1657264500
      },
      Moon: {
        Rise: '2022-07-08T12:37:00+10:00',
        EpochRise: 1657247820,
        Set: '2022-07-09T02:09:00+10:00',
        EpochSet: 1657296540,
        Phase: 'WaxingGibbous',
        Age: 9
      },
      Temperature: {
        Minimum: {
          Value: 7.1,
          Unit: 'C',
          UnitType: 17
        },
        Maximum: {
          Value: 13.1,
          Unit: 'C',
          UnitType: 17
        }
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 1.5,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Cold'
        },
        Maximum: {
          Value: 9.8,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Chilly'
        }
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 1.5,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Cold'
        },
        Maximum: {
          Value: 9.1,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Chilly'
        }
      },
      HoursOfSun: 1.9,
      DegreeDaySummary: {
        Heating: {
          Value: 8.0,
          Unit: 'C',
          UnitType: 17
        },
        Cooling: {
          Value: 0.0,
          Unit: 'C',
          UnitType: 17
        }
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: 'Good',
          CategoryValue: 1,
          Type: 'Ozone'
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'UVIndex',
          Value: 2,
          Category: 'Low',
          CategoryValue: 1
        }
      ],
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
            UnitType: 7
          },
          Direction: {
            Degrees: 245,
            Localized: 'WSW',
            English: 'WSW'
          }
        },
        WindGust: {
          Speed: {
            Value: 48.2,
            Unit: 'km/h',
            UnitType: 7
          },
          Direction: {
            Degrees: 229,
            Localized: 'SW',
            English: 'SW'
          }
        },
        TotalLiquid: {
          Value: 3.3,
          Unit: 'mm',
          UnitType: 3
        },
        Rain: {
          Value: 3.3,
          Unit: 'mm',
          UnitType: 3
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        HoursOfPrecipitation: 3.0,
        HoursOfRain: 3.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 85,
        Evapotranspiration: {
          Value: 1.0,
          Unit: 'mm',
          UnitType: 3
        },
        SolarIrradiance: {
          Value: 2395.4,
          Unit: 'W/m²',
          UnitType: 33
        }
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
            UnitType: 7
          },
          Direction: {
            Degrees: 238,
            Localized: 'WSW',
            English: 'WSW'
          }
        },
        WindGust: {
          Speed: {
            Value: 35.2,
            Unit: 'km/h',
            UnitType: 7
          },
          Direction: {
            Degrees: 271,
            Localized: 'W',
            English: 'W'
          }
        },
        TotalLiquid: {
          Value: 2.4,
          Unit: 'mm',
          UnitType: 3
        },
        Rain: {
          Value: 2.4,
          Unit: 'mm',
          UnitType: 3
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        HoursOfPrecipitation: 2.0,
        HoursOfRain: 2.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 70,
        Evapotranspiration: {
          Value: 0.3,
          Unit: 'mm',
          UnitType: 3
        },
        SolarIrradiance: {
          Value: 0.0,
          Unit: 'W/m²',
          UnitType: 33
        }
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=4&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=4&unit=c&lang=en-us'
    },
    {
      Date: '2022-07-09T07:00:00+10:00',
      EpochDate: 1657314000,
      Sun: {
        Rise: '2022-07-09T07:35:00+10:00',
        EpochRise: 1657316100,
        Set: '2022-07-09T17:15:00+10:00',
        EpochSet: 1657350900
      },
      Moon: {
        Rise: '2022-07-09T13:06:00+10:00',
        EpochRise: 1657335960,
        Set: '2022-07-10T03:21:00+10:00',
        EpochSet: 1657387260,
        Phase: 'WaxingGibbous',
        Age: 10
      },
      Temperature: {
        Minimum: {
          Value: 4.7,
          Unit: 'C',
          UnitType: 17
        },
        Maximum: {
          Value: 13.6,
          Unit: 'C',
          UnitType: 17
        }
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 3.2,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Cold'
        },
        Maximum: {
          Value: 11.6,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Cool'
        }
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 3.2,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Cold'
        },
        Maximum: {
          Value: 10.2,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Chilly'
        }
      },
      HoursOfSun: 7.9,
      DegreeDaySummary: {
        Heating: {
          Value: 9.0,
          Unit: 'C',
          UnitType: 17
        },
        Cooling: {
          Value: 0.0,
          Unit: 'C',
          UnitType: 17
        }
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: 'Good',
          CategoryValue: 1,
          Type: 'Ozone'
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1
        },
        {
          Name: 'UVIndex',
          Value: 2,
          Category: 'Low',
          CategoryValue: 1
        }
      ],
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
            UnitType: 7
          },
          Direction: {
            Degrees: 209,
            Localized: 'SSW',
            English: 'SSW'
          }
        },
        WindGust: {
          Speed: {
            Value: 24.1,
            Unit: 'km/h',
            UnitType: 7
          },
          Direction: {
            Degrees: 202,
            Localized: 'SSW',
            English: 'SSW'
          }
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 19,
        Evapotranspiration: {
          Value: 1.3,
          Unit: 'mm',
          UnitType: 3
        },
        SolarIrradiance: {
          Value: 5462.0,
          Unit: 'W/m²',
          UnitType: 33
        }
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
            UnitType: 7
          },
          Direction: {
            Degrees: 269,
            Localized: 'W',
            English: 'W'
          }
        },
        WindGust: {
          Speed: {
            Value: 20.4,
            Unit: 'km/h',
            UnitType: 7
          },
          Direction: {
            Degrees: 193,
            Localized: 'SSW',
            English: 'SSW'
          }
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 42,
        Evapotranspiration: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        SolarIrradiance: {
          Value: 0.0,
          Unit: 'W/m²',
          UnitType: 33
        }
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=5&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=5&unit=c&lang=en-us'
    }
  ]
};

export const mockCurrentData = [
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
        UnitType: 17
      },
      Imperial: {
        Value: 46.0,
        Unit: 'F',
        UnitType: 18
      }
    },
    RealFeelTemperature: {
      Metric: {
        Value: 7.3,
        Unit: 'C',
        UnitType: 17,
        Phrase: 'Chilly'
      },
      Imperial: {
        Value: 45.0,
        Unit: 'F',
        UnitType: 18,
        Phrase: 'Chilly'
      }
    },
    RealFeelTemperatureShade: {
      Metric: {
        Value: 7.3,
        Unit: 'C',
        UnitType: 17,
        Phrase: 'Chilly'
      },
      Imperial: {
        Value: 45.0,
        Unit: 'F',
        UnitType: 18,
        Phrase: 'Chilly'
      }
    },
    RelativeHumidity: 75,
    IndoorRelativeHumidity: 34,
    DewPoint: {
      Metric: {
        Value: 3.9,
        Unit: 'C',
        UnitType: 17
      },
      Imperial: {
        Value: 39.0,
        Unit: 'F',
        UnitType: 18
      }
    },
    Wind: {
      Direction: {
        Degrees: 225,
        Localized: 'SW',
        English: 'SW'
      },
      Speed: {
        Metric: {
          Value: 7.4,
          Unit: 'km/h',
          UnitType: 7
        },
        Imperial: {
          Value: 4.6,
          Unit: 'mi/h',
          UnitType: 9
        }
      }
    },
    WindGust: {
      Speed: {
        Metric: {
          Value: 7.4,
          Unit: 'km/h',
          UnitType: 7
        },
        Imperial: {
          Value: 4.6,
          Unit: 'mi/h',
          UnitType: 9
        }
      }
    },
    UVIndex: 0,
    UVIndexText: 'Low',
    Visibility: {
      Metric: {
        Value: 16.1,
        Unit: 'km',
        UnitType: 6
      },
      Imperial: {
        Value: 10.0,
        Unit: 'mi',
        UnitType: 2
      }
    },
    ObstructionsToVisibility: '',
    CloudCover: 35,
    Ceiling: {
      Metric: {
        Value: 12192.0,
        Unit: 'm',
        UnitType: 5
      },
      Imperial: {
        Value: 40000.0,
        Unit: 'ft',
        UnitType: 0
      }
    },
    Pressure: {
      Metric: {
        Value: 1024.0,
        Unit: 'mb',
        UnitType: 14
      },
      Imperial: {
        Value: 30.24,
        Unit: 'inHg',
        UnitType: 12
      }
    },
    PressureTendency: {
      LocalizedText: 'Steady',
      Code: 'S'
    },
    Past24HourTemperatureDeparture: {
      Metric: {
        Value: -3.3,
        Unit: 'C',
        UnitType: 17
      },
      Imperial: {
        Value: -6.0,
        Unit: 'F',
        UnitType: 18
      }
    },
    ApparentTemperature: {
      Metric: {
        Value: 9.4,
        Unit: 'C',
        UnitType: 17
      },
      Imperial: {
        Value: 49.0,
        Unit: 'F',
        UnitType: 18
      }
    },
    WindChillTemperature: {
      Metric: {
        Value: 6.7,
        Unit: 'C',
        UnitType: 17
      },
      Imperial: {
        Value: 44.0,
        Unit: 'F',
        UnitType: 18
      }
    },
    WetBulbTemperature: {
      Metric: {
        Value: 6.1,
        Unit: 'C',
        UnitType: 17
      },
      Imperial: {
        Value: 43.0,
        Unit: 'F',
        UnitType: 18
      }
    },
    Precip1hr: {
      Metric: {
        Value: 0.0,
        Unit: 'mm',
        UnitType: 3
      },
      Imperial: {
        Value: 0.0,
        Unit: 'in',
        UnitType: 1
      }
    },
    PrecipitationSummary: {
      Precipitation: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1
        }
      },
      PastHour: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1
        }
      },
      Past3Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1
        }
      },
      Past6Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1
        }
      },
      Past9Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1
        }
      },
      Past12Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1
        }
      },
      Past18Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1
        }
      },
      Past24Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1
        }
      }
    },
    TemperatureSummary: {
      Past6HourRange: {
        Minimum: {
          Metric: {
            Value: 7.8,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 46.0,
            Unit: 'F',
            UnitType: 18
          }
        },
        Maximum: {
          Metric: {
            Value: 12.8,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 55.0,
            Unit: 'F',
            UnitType: 18
          }
        }
      },
      Past12HourRange: {
        Minimum: {
          Metric: {
            Value: 7.8,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 46.0,
            Unit: 'F',
            UnitType: 18
          }
        },
        Maximum: {
          Metric: {
            Value: 12.8,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 55.0,
            Unit: 'F',
            UnitType: 18
          }
        }
      },
      Past24HourRange: {
        Minimum: {
          Metric: {
            Value: 7.8,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 46.0,
            Unit: 'F',
            UnitType: 18
          }
        },
        Maximum: {
          Metric: {
            Value: 12.8,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 55.0,
            Unit: 'F',
            UnitType: 18
          }
        }
      }
    },
    MobileLink: 'http://www.accuweather.com/en/au/melbourne/26216/current-weather/26216?lang=en-us',
    Link: 'http://www.accuweather.com/en/au/melbourne/26216/current-weather/26216?lang=en-us'
  }
];
