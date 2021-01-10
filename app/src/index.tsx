import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import App from './App';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
