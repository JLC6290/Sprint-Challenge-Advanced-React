import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('dark mode button appears on page', () => {
  const { getByText } = render(<App/>);
  const button = getByText(/dark mode/i);
  expect(button).toBeInTheDocument();
})