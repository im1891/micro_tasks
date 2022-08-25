import React from 'react';
import { render, screen } from '@testing-library/react';
import AppTask04 from './App(task04)';

test('renders learn react link', () => {
  render(<AppTask04 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
