import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import LoginAdmin from './LoginAdmin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><LoginAdmin /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
