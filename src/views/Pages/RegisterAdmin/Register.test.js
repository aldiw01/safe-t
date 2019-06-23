import React from 'react';
import ReactDOM from 'react-dom';
import RegisterAdmin from './RegisterAdmin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterAdmin />, div);
  ReactDOM.unmountComponentAtNode(div);
});
