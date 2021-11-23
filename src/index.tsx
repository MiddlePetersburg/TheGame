import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

import './styles/styles.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const store = configureStore({});

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, rootElement,
);
