import React from 'react';11
import ReactDOM from 'react-dom';
import App from '../Components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
