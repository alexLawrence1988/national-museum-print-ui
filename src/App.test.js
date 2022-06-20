import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the page heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/National Museum Prints/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the page sub-heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/National Museum Prints/i);
  expect(linkElement).toBeInTheDocument();
});