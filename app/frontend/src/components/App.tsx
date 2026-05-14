import { type FormEvent, useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_WEATHER } from "../query/weather-query";
import type { Forecast, WeatherContextInput, WeatherResponse, WeatherVariables } from "../utils/types";
import { formatTime, getDay, getWeatherIcon, isToday } from "../utils/utils";
import { AiAssistance } from "./AiAssistance";

const DEFAULT_LOCATION = "Melbourne, VIC, Australia";

export const App = () => {
  const [searchInput, setSearchInput] = useState(DEFAULT_LOCATION);
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [metric, setMetric] = useState(true);
  const [aiOpen, setAiOpen] = useState(false);

  const { data, loading, error } = useQuery<WeatherResponse, WeatherVariables>(GET_WEATHER, {
    variables: { location, metric },
  });

  const current = data?.weather.current;
  const forecasts = data?.weather.forecasts ?? [];
  const locationName = data?.weather.locationName ?? location;

  const currentTemp = useMemo(() => {
    if (!current) return null;
    return metric ? current.temperature.metric : current.temperature.imperial;
  }, [current, metric]);

  const currentPrecip = useMemo(() => {
    if (!current) return null;
    return metric ? current.precipitation.metric : current.precipitation.imperial;
  }, [current, metric]);

  const windSpeed = useMemo(() => {
    if (!current) return null;
    return metric ? current.wind.speed.metric : current.wind.speed.imperial;
  }, [current, metric]);

  const weatherContext = useMemo<WeatherContextInput | null>(() => {
    if (!current) return null;
    const forecastSummary = forecasts
      .slice(0, 5)
      .map((f) => {
        const day = isToday(f.date) ? "Today" : getDay(f.date);
        const lo = Math.round(f.temperatureRange.minimum.value);
        const hi = Math.round(f.temperatureRange.maximum.value);
        const unit = f.temperatureRange.minimum.unit;
        return `${day}: ${f.dayDetail.text}, ${lo}-${hi}°${unit}`;
      })
      .join("; ");
    return {
      locationName,
      conditionText: current.weatherDetail.text,
      temperatureC: current.temperature.metric.value,
      temperatureF: current.temperature.imperial.value,
      humidity: current.humidity,
      precipitationMm: current.precipitation.metric.value,
      windSpeedKmh: current.wind.speed.metric.value,
      windDirection: current.wind.direction.localized,
      observedAt: current.date,
      forecastSummary,
    };
  }, [current, forecasts, locationName]);

  const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = searchInput.trim();
    if (value.length > 0) {
      setLocation(value);
    }
  };

  const renderForecast = (forecast: Forecast) => {
    const dayTitle = isToday(forecast.date) ? "Today" : getDay(forecast.date);
    const low = forecast.temperatureRange.minimum;
    const high = forecast.temperatureRange.maximum;

    return (
      <article key={forecast.date} className="forecast-card">
        <p className="forecast-day">{dayTitle}</p>
        <img src={getWeatherIcon(forecast.dayDetail.icon)} alt={forecast.dayDetail.text} className="forecast-icon" />
        <p className="forecast-desc">{forecast.dayDetail.text}</p>
        <div className="forecast-temp">
          <span>L: {Math.round(low.value)}°</span>
          <span>H: {Math.round(high.value)}°</span>
        </div>
      </article>
    );
  };

  return (
    <main className="page">
      <section className="panel">
        <header className="header">
          <div>
            <p className="kicker">GraphQL Weather</p>
            <h1 className="title">5-day forecast</h1>
          </div>
          <label className="toggle">
            <input type="checkbox" checked={metric} onChange={() => setMetric((v) => !v)} />
            <span>{metric ? "Metric" : "Imperial"}</span>
          </label>
        </header>

        <form className="search" onSubmit={onSearchSubmit}>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search city, state, country"
            aria-label="location input"
          />
          <button type="submit">Search</button>
          <button
            type="button"
            className="ai-icon-button"
            onClick={() => setAiOpen(true)}
            aria-label="Open AI assistant"
            title="Ask the AI assistant"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M12 2l1.7 4.3L18 8l-4.3 1.7L12 14l-1.7-4.3L6 8l4.3-1.7L12 2zm6 10l1 2.5 2.5 1-2.5 1L18 19l-1-2.5L14.5 15.5l2.5-1L18 12zM5 13l.9 2.1L8 16l-2.1.9L5 19l-.9-2.1L2 16l2.1-.9L5 13z"
                fill="currentColor"
              />
            </svg>
            <span className="ai-icon-label">AI</span>
          </button>
        </form>

        {loading && <p className="status">Loading weather data...</p>}
        {error && <p className="status error">Unable to load weather: {error.message}</p>}

        {current && !loading && (
          <>
            <section className="current-card">
              <div>
                <p className="location">{locationName}</p>
                <p className="time">Updated {formatTime(current.date)}</p>
                <p className="condition">{current.weatherDetail.text}</p>
              </div>
              <div className="current-main">
                <img src={getWeatherIcon(current.weatherDetail.icon)} alt={current.weatherDetail.text} />
                <p className="current-temp">
                  {Math.round(currentTemp?.value ?? 0)} {currentTemp?.unit}
                </p>
              </div>
              <div className="metrics">
                <p>
                  Precipitation: {currentPrecip?.value} {currentPrecip?.unit}
                </p>
                <p>Humidity: {current.humidity}%</p>
                <p>
                  Wind: {current.wind.direction.localized} {windSpeed?.value} {windSpeed?.unit}
                </p>
              </div>
            </section>

            <section className="forecast-grid">{forecasts.map(renderForecast)}</section>
          </>
        )}
      </section>
      <AiAssistance
        open={aiOpen}
        onClose={() => setAiOpen(false)}
        weatherContext={weatherContext}
      />
    </main>
  );
};
