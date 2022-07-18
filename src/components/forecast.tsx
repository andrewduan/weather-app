import React from 'react';
import { getDay, isDaytime, isToday } from '../util/dateHelper';
import { getWeatherIcon } from '../util/iconHelper';

export function Forecast (props: any) {
  const { forecast } = props;
  let dayName = getDay(forecast.date);
  if (isToday(forecast.date)) {
    dayName = 'Today';
  }

  const weather = isDaytime ? forecast.dayDetail : forecast.nightDetail;
  const iconUrl = getWeatherIcon(weather.icon);
  const italicMedium = 'italic font-medium';
  const fontlight = 'font-light flex';
  const unitIcon = forecast.temperatureRange.minimum.unit === 'C' ? '/thermometer.png' : '/fahrenheit.png';

  return (
    <>
      <div className="w-1/5" id="forecast">
        <div className={italicMedium}>{dayName}</div>
        <div>
          <img typeof="foaf:Image" src={iconUrl} width="75" height="45" alt={weather.text} title={weather.text}></img>
        </div>
        <div className={fontlight}>
          <div>{forecast.temperatureRange.minimum.value}</div>
          <div>
            <img
              src={process.env.PUBLIC_URL + unitIcon}
              width="20"
              height="20"
              alt={forecast.temperatureRange.maximum.unit}
            ></img>
          </div>
        </div>
        <div className={fontlight}>
          {forecast.temperatureRange.maximum.value}{' '}
          <img
            src={process.env.PUBLIC_URL + unitIcon}
            width="20"
            height="20"
            alt={forecast.temperatureRange.maximum.unit}
          ></img>
        </div>
      </div>
    </>
  );
}
