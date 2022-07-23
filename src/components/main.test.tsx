import React from 'react';
import { fireEvent, render, within } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { mockCurrentData, mockForecastsData, mockLocationData } from '../../tests/data';
import { Main } from './main';
describe('main', () => {
  beforeEach(() => {
    global.fetch = jest.fn((url: string) => {
      return Promise.resolve({
        json: () => {
          if (url.indexOf('/locations/v1/cities/search') > -1) {
            return Promise.resolve(mockLocationData);
          }
          if (url.indexOf('/currentconditions/v1') > -1) {
            return Promise.resolve(mockCurrentData);
          }
          if (url.indexOf('/forecasts/v1/daily/5day') > -1) {
            return Promise.resolve(mockForecastsData);
          }
        }
      });
    }) as jest.Mock;
  });

  it('should render main', async () => {
    let container: HTMLElement;

    await act(
      async () =>
        await act(
          async () =>
            await act(() => {
              container = render(<Main />).container;
            })
        )
    );

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

    // GetLocation, getCurrent, GetForecast 2 times eatch
    expect(global.fetch).toBeCalledTimes(6);
  });
});
