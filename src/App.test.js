import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});

test('renders products', () => {
    render(<App />);
    const linkElement = screen.getByText(/List of products:/i);
    expect(linkElement).toBeInTheDocument();
  });