import React from 'react';
import ReactDOM from 'react-dom';
import Contador from './components/Contador'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Contador />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

