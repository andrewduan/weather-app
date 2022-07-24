import React, { FC, useEffect, useState } from 'react';
import { mapCurrent, mapForecasts } from '../util/mapper';
import { WeatherInfo } from '../models/weather-state';
import useDebounce from '../util/use-debounce';
import { CurrentCondition } from './current-condition';
import { Forecast } from './forecast';

export const Main: FC = () => {
  const baseUrl = 'http://dataservice.accuweather.com';
  const apiKey = 'VAZuCXu8XTTKiQIqGwJCv0AAppmnkYG2';
  const initialState: WeatherInfo = { current: undefined, forecasts: undefined };

  const [location, setLocation] = useState('Melbourne, VIC, Australia'); // Melbourne
  const [locationId, setLocationId] = useState('26216'); // Melbourne
  const [isMetric, setIsMetric] = useState(true);
  const [weather, setWeather] = useState(initialState);
  const debouncedLocation = useDebounce(location, 2000);

  useEffect(() => {
    if (debouncedLocation) {
      const fetchLocation = async () => {
        const data = await fetch(`${baseUrl}/locations/v1/cities/search?apikey=${apiKey}&q=${debouncedLocation}`);
        return data.json();
      };

      const fetchWeather = async () => {
        const currentWeather = await fetch(
          `${baseUrl}/currentconditions/v1/${locationId}?apikey=${apiKey}&details=true`
        );
        const forecasts = await fetch(
          `${baseUrl}/forecasts/v1/daily/5day/${locationId}?apikey=${apiKey}&details=true&metric=${isMetric}`
        );

        return Promise.all([currentWeather.json(), forecasts.json()]);
      };

      fetchLocation()
        .then((data) => {
          if (data && Array.isArray(data) && data.length > 0) {
            setLocation(data[0].LocalizedName);
            setLocationId(data[0].Key);
          }

          fetchWeather()
            .then((data) => {
              const weatherInfo: WeatherInfo = {
                current: mapCurrent(data[0][0]),
                forecasts: mapForecasts(data[1].DailyForecasts),
              };
              setWeather(weatherInfo);
            })
            .catch(console.error);
        })
        .catch(console.error);
    }
  }, [debouncedLocation, locationId, isMetric]);

  const handleChange = () => {
    setIsMetric(!isMetric);
  };

  return (
    <>
      <div className="my-5 px-4 flex">
        <div className="w-1/2 px-4">
          <span>Location: </span>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}></input>
        </div>
        <div className="w-1/2 px-4">
          <label>
            Use Metric: <input type="checkbox" checked={isMetric} onChange={handleChange} />
          </label>
        </div>
      </div>
      {weather.current && (
        <CurrentCondition location={location} current={weather.current} isMetric={isMetric}></CurrentCondition>
      )}

      {weather.forecasts && (
        <div className="flex flex-row px-4">
          {weather.forecasts.map((forecast, index) => (
            <Forecast key={index} forecast={forecast}></Forecast>
          ))}
        </div>
      )}
    </>
  );
};
