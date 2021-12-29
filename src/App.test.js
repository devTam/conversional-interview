import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/I open a link but I should also open the modal./i);
  console.log(screen)
  expect(linkElement).toBeInTheDocument();
});
