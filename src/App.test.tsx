import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('has Start button', () => {
  render(<App />);
  const startButtonElement = screen.getByText(/Start/i);
  expect(startButtonElement).toBeInTheDocument();
});
