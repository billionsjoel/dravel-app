import React from 'react';
import {
  render, cleanup, within, screen,
} from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
import Splash from '../pages/splash';
import HomePage from '../pages/homePage';
import DetailsPage from '../pages/detailsPage';
import DeletePage from '../pages/deletePage';
import ReservationPage from '../pages/reservation';

afterEach(cleanup);

describe('It should test UI DOM components', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
  it('should render the title on the splash page', () => {
    render(<Splash />);
    const { getByText } = within(screen.getByTestId('app-title'));
    expect(getByText('Dravel')).toBeInTheDocument();
  });
  it('should render the title on the home page', () => {
    render(<HomePage />);
    const { getByText } = within(screen.getByTestId('app-title'));
    expect(getByText('LATEST DISCOVERIES')).toBeInTheDocument();
  });
  it('should render the title on the details page', () => {
    render(<DetailsPage />);
    const { getByText } = within(screen.getByTestId('app-title'));
    expect(getByText('Product heading')).toBeInTheDocument();
  });
  it('should render the title on the delete page', () => {
    render(<DeletePage />);
    const { getByText } = within(screen.getByTestId('app-title'));
    expect(getByText('Delete')).toBeInTheDocument();
  });
  it('should render the title on the reservation page', () => {
    render(<ReservationPage />);
    const { getByText } = within(screen.getByTestId('app-title'));
    expect(getByText('RESERVE A DRAVEL')).toBeInTheDocument();
  });
});
