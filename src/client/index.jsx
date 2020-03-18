import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import createStore from '../redux/createStore';
import Routes from './routes';
import '../styles/root-sass.scss';

const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(preloadedState, window);
delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>, document.getElementById('root'),
);
