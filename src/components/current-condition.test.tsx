import React from 'react';
import { render, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CurrentCondition } from './current-condition';
import { current } from '../../tests/data';
import { getById } from '../../tests/helper';

describe('Current condition', () => {
  it('renders with passed in props', async () => {
    const { container } = render(<CurrentCondition location="Melbourne" current={current} isMetric={true} />);
    const currentMain = getById(container, 'currentMain');

    const location = await within(currentMain).findByText('Melbourne');
    expect(location).not.toBeNull();

    const day = await within(currentMain).findByText('Sunday');
    expect(day).not.toBeNull();

    const weather = await within(currentMain).findByText('Partly Cloudy');
    expect(weather).not.toBeNull();

    const imgs = await within(currentMain).findAllByRole('img');
    expect(imgs).not.toBeNull();
    expect(imgs.length).toBe(1);
    const img = imgs[0];
    expect(img.getAttribute('src')).toContain('35-s.png');
    expect(img.getAttribute('alt')).toContain('Partly Cloudy');
    expect(img.getAttribute('title')).toContain('Partly Cloudy');

    const currentOther = getById(container, 'currentOther');
    const temperature = await within(currentOther).findByText('Temperature: 8.2 C');
    expect(temperature).not.toBeNull();
  });
});
