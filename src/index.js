import React from 'react';
import ReactDOM from 'react-dom';
import Contador from './components/Contador'
import App from './App';
import Listagem from './components/Listagem';
import Instrumentos from './components/Instrumentos';


ReactDOM.render(
  <React.StrictMode>
    <Instrumentos />
    <Contador />
    {/* <Contador />
    <App /> */}
    {/* <Listagem /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

