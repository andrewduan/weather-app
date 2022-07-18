import React from 'react';
import { render, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Forecast } from './forecast';
import { forecast } from '../../tests/data';
import { getById } from '../../tests/helper';

it('renders with passed in props', async () => {
  const { container } = render(<Forecast key="1" forecast={forecast} />);
  const forecastEle = getById(container, 'forecast');

  const day = await within(forecastEle).findByText('Sunday');
  expect(day).not.toBeNull();

  const imgs = await within(forecastEle).findAllByRole('img');
  expect(imgs).not.toBeNull();
  expect(imgs.length).toBe(3);

  const tempLow = await within(forecastEle).findByText('6.2');
  expect(tempLow).not.toBeNull();

  const tempHigh = await within(forecastEle).findByText('18');
  expect(tempHigh).not.toBeNull();

  const weatherImg = imgs[0];
  expect(weatherImg.getAttribute('src')).toContain('18-s.png');
  expect(weatherImg.getAttribute('alt')).toContain('Sunny');
  expect(weatherImg.getAttribute('title')).toContain('Sunny');

  const tempLowImg = imgs[1];

  expect(tempLowImg.getAttribute('src')).toContain('thermometer.png');
  expect(tempLowImg.getAttribute('alt')).toContain('C');

  const tempHighImg = imgs[2];
  expect(tempHighImg.getAttribute('src')).toContain('thermometer.png');
  expect(tempHighImg.getAttribute('alt')).toContain('C');
});
