import React from 'react';
import App from './App';
import Contador from './Contador'
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Contador />
  </React.StrictMode>,
  document.getElementById('root')
);

