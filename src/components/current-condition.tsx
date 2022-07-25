import React, { FC } from 'react';
import { getDay } from '../util/dateHelper';
import { getWeatherIcon } from '../util/iconHelper';
import { LocationProp } from '../models/props/location';
export const CurrentCondition: FC<LocationProp> = (props) => {
  const { location, current, isMetric } = props;
  const dayName = getDay(current.date);
  
  const { metric: metricPrecipitation, imperial: imperialPrecipitation } = current.precipitation;
  const precipitation = isMetric ? metricPrecipitation : imperialPrecipitation;
  
  const { metric: metricTemperature, imperial: imperialTemperature } = current.temperature;
  const temperature = isMetric ? metricTemperature :imperialTemperature;
  
  const { direction } = current.wind;

  const { metric: metricSpeed, imperial: imperialSpeed } = current.wind.speed;
  const speed = isMetric ? metricSpeed : imperialSpeed;

  const fontCss = 'font-sans md:font-serif text-slate-600';
  const iconUrl = getWeatherIcon(current.weatherDetail.icon);
  return (
    <>
      <div className="flex flex-row my-8" id="current">
        <div className="w-1/2 px-4" id="currentMain">
          <div className={`${fontCss} text-lg font-bold`}>{location}</div>
          <div className={fontCss}>{dayName}</div>
          <div>
            <img
              typeof="foaf:Image"
              src={iconUrl}
              width="75"
              height="45"
              alt={current.weatherDetail.text}
              title={current.weatherDetail.text}
            ></img>
          </div>
          <div className={fontCss}>{current.weatherDetail.text}</div>
        </div>
        <div className="w-1/2 px-4" id="currentOther">
          <div className={fontCss}>
            Temperature: {temperature.value} {temperature.unit}
          </div>
          <div className={fontCss}>
            Precipitation: {precipitation.value} {precipitation.unit}
          </div>
          <div className={fontCss}>Humidity: {current.humidity}%</div>
          <div className={fontCss}>
            Wind: {direction.localized} {speed.value} {speed.unit}
          </div>
        </div>
      </div>
    </>
  );
}
