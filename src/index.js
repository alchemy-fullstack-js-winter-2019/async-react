import React from 'react'; //by importing react to use jsx
import { render } from 'react-dom'; 
import App from './components/App';

//render allows us to append a child
//render once and everything goes inside App
render(
  <App />,
  document.getElementById('root')
);
