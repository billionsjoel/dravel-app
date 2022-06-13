import React from 'react';
import { render, within, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Splash from '../pages/splash';

it('should render the title on the splash page', () => {
  render(<Splash />);
  const { getByText } = within(screen.getByTestId('app-title'));
  expect(getByText('Dravel')).toBeInTheDocument();
});
