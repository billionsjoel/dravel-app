import React from 'react';
import { render, within, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Splash from '../pages/splash';
import HomePage from '../pages/homePage';
import DetailsPage from '../pages/detailsPage';
import DeletePage from '../pages/deletePage';
import ReservationPage from '../pages/reservation';

it('should render the title on the splash page', () => {
  render(<Splash />);
  const { getByText } = within(screen.getByTestId('app-title'));
  expect(getByText('Dravel')).toBeInTheDocument();
});
it('should render the title on the splash page', () => {
  render(<HomePage />);
  const { getByText } = within(screen.getByTestId('app-title'));
  expect(getByText('DISCOVERIES')).toBeInTheDocument();
});
it('should render the title on the splash page', () => {
  render(<DetailsPage />);
  const { getByText } = within(screen.getByTestId('app-title'));
  expect(getByText('Product')).toBeInTheDocument();
});
it('should render the title on the splash page', () => {
  render(<DeletePage />);
  const { getByText } = within(screen.getByTestId('app-title'));
  expect(getByText('Delete')).toBeInTheDocument();
});
it('should render the title on the splash page', () => {
  render(<ReservationPage />);
  const { getByText } = within(screen.getByTestId('app-title'));
  expect(getByText('RESERVE')).toBeInTheDocument();
});
