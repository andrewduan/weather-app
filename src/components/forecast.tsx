import React, { FC } from 'react';
import { ForecastProp } from '../models/props/forecast';
import { getDay, isDaytime, isToday } from '../util/dateHelper';
import { getWeatherIcon } from '../util/iconHelper';

export const Forecast: FC<ForecastProp> = (props) => {
  const {
    dayDetail,
    nightDetail,
    temperatureRange: { minimum: lowTemperature, maximum: highTemperature },
    date
  } = props.forecast;

  let dayName = getDay(date);
  if (isToday(date)) {
    dayName = 'Today';
  }
  const weatherDetail = isDaytime() ? dayDetail : nightDetail;
  const { icon, text } = weatherDetail;
  const iconUrl = getWeatherIcon(icon);
  const italicMedium = 'italic font-medium';
  const fontlight = 'font-light flex';

  const { unit: lowTemperatureUnit, value: lowTemperatureValue } = lowTemperature;
  const { unit: highTemperatureUnit, value: highTemperatureValue } = highTemperature;
  const unitIcon = lowTemperatureUnit === 'C' ? '/thermometer.png' : '/fahrenheit.png';

  return (
    <>
      <div className="w-1/5" id="forecast">
        <div className={italicMedium}>{dayName}</div>
        <div>
          <img typeof="foaf:Image" src={iconUrl} width="75" height="45" alt={text} title={text}></img>
        </div>
        <div className={fontlight}>
          <div>{lowTemperatureValue}</div>
          <div>
            <img src={process.env.PUBLIC_URL + unitIcon} width="20" height="20" alt={lowTemperatureUnit}></img>
          </div>
        </div>
        <div className={fontlight}>
          <div>{highTemperatureValue}</div>
          <img src={process.env.PUBLIC_URL + unitIcon} width="20" height="20" alt={highTemperatureUnit}></img>
        </div>
      </div>
    </>
  );
};
