import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Splash from '../pages/splash';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

it('should render the home page', () => {
  const { container, getByTestId } = renderWithRouter(<Splash />);
  const navbar = getByTestId('navbar');
  const link = getByTestId('home-link');

  expect(container.innerHTML).toMatch('Home page');
  expect(navbar).toContainElement(link);
});
