import React from 'react';
import { fireEvent, render, within } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import {
  mockSydneyCurrentData,
  mockMelbourneForecastsData,
  mockMelbourneLocationData,
  mockSydneyLocationData,
  mockMelbourneCurrentData,
  mockSydneyMetricForecastsData,
  mockSydneyImperialForecastsData
} from '../../tests/data';
import { Main } from './main';
describe('main', () => {
  beforeEach(() => {
    global.fetch = jest.fn((url: string) => {
      url = url.toLowerCase();
      return Promise.resolve({
        json: () => {
          if (url.indexOf('/locations/v1/cities/search') > -1) {
            if (url.indexOf('melbourne') > -1) {
              return Promise.resolve(mockMelbourneLocationData);
            }
            return Promise.resolve(mockSydneyLocationData);
          }
          if (url.indexOf('/currentconditions/v1') > -1) {
            if (url.indexOf('melbourne') > -1) {
              return Promise.resolve(mockMelbourneCurrentData);
            }
            return Promise.resolve(mockSydneyCurrentData);
          }
          if (url.indexOf('/forecasts/v1/daily/5day') > -1) {
            if (url.indexOf('melbourne') > -1) {
              return Promise.resolve(mockMelbourneForecastsData);
            }
            if (url.indexOf('metric=true') > -1) {
              return Promise.resolve(mockSydneyMetricForecastsData);
            }
            return Promise.resolve(mockSydneyImperialForecastsData);
          }
        }
      });
    }) as jest.Mock;
  });

  it('should render main', async () => {
    let container: HTMLElement;

    await act(async () => {
      container = render(<Main />).container;
    });

    const metric = await within(container).findByText('Use Metric:');
    expect(metric).not.toBeNull();
  });

  it('should render main when location changes', async () => {
    let container: HTMLElement;

    await act(async () => {
      container = render(<Main />).container;
    });

    const spanLocation = await within(container).findByText('Location:');
    expect(spanLocation).not.toBeNull();

    const locationInput = await within(container).getByRole('textbox');
    fireEvent.change(locationInput, { target: { value: 'Sydney, NSW, Australia' } });

    // current weather
    const currentMetricTemp = await within(container).findByText('Temperature: 8.4 C');
    expect(currentMetricTemp).not.toBeNull();

    // forecast
    const lowTempForecast = await within(container).findByText('7.3');
    expect(lowTempForecast).not.toBeNull();

    let forecastMetricImages = await within(container).findAllByRole('img');
    forecastMetricImages = forecastMetricImages.filter((i) => i.getAttribute('src').indexOf('/thermometer.png') > -1);
    expect(forecastMetricImages.length).toBe(10);
  });

  it('should render main when location changes & Metric change', async () => {
    let container: HTMLElement;

    await act(async () => {
      container = render(<Main />).container;
    });

    const spanLocation = await within(container).findByText('Location:');
    expect(spanLocation).not.toBeNull();

    const locationInput = await within(container).getByRole('textbox');
    fireEvent.change(locationInput, { target: { value: 'Sydney, NSW, Australia' } });

    const metricCheckbox = await within(container).getByRole('checkbox');
    fireEvent.click(metricCheckbox);

    // current weather
    const currentImperialTemp = await within(container).findByText('Temperature: 46.2 F');
    expect(currentImperialTemp).not.toBeNull();

    // forecast
    const lowTempImpForecast = await within(container).findByText('27.5');
    expect(lowTempImpForecast).not.toBeNull();

    let forecastImperialImages = await within(container).findAllByRole('img');
    forecastImperialImages = forecastImperialImages.filter(
      (i) => i.getAttribute('src').indexOf('/fahrenheit.png') > -1
    );
    expect(forecastImperialImages.length).toBe(10);
  });
});
