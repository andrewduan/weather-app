import React from 'react';
import { getDay } from '../util/dateHelper';
import { getWeatherIcon } from '../util/iconHelper';
export function CurrentCondition (props: any) {
  const { location, current, isMetric } = props;
  const dayName = getDay(current.date);
  const precipitation = isMetric ? current.precipitation.metric : current.precipitation.imperial;
  const temperature = isMetric ? current.temperature.metric : current.temperature.imperial;
  const { direction } = current.wind;
  const speed = isMetric ? current.wind.speed.metric : current.wind.speed.imperial;
  const css = 'font-sans md:font-serif text-slate-600';
  const iconUrl = getWeatherIcon(current.weatherDetail.icon);
  return (
    <>
      <div className="flex flex-row my-8" id="current">
        <div className="w-1/2 px-4" id="currentMain">
          <div className={`${css} text-lg font-bold`}>{location}</div>
          <div className={css}>{dayName}</div>
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
          <div className={css}>{current.weatherDetail.text}</div>
        </div>
        <div className="w-1/2 px-4" id="currentOther">
          <div className={css}>
            Temperature: {temperature.value} {temperature.unit}
          </div>
          <div className={css}>
            Precipitation: {precipitation.value} {precipitation.unit}
          </div>
          <div className={css}>Humidity: {current.humidity}%</div>
          <div className={css}>
            Wind: {direction.localized} {speed.value} {speed.unit}
          </div>
        </div>
      </div>
    </>
  );
}
