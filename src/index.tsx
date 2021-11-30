import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

import './styles/styles.scss';

window.onload = () => {
  const rootElement = document.getElementById('root');

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, rootElement,
  );
};

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        // eslint-disable-next-line no-console
        console.log('ServiceWorker registration successful with  scope: ', registration.scope);
      })
      .catch((error: string) => {
        // eslint-disable-next-line no-console
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}
