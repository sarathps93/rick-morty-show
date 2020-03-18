import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import htmlTemplate from '../templates/htmlTemplate';
import App from '../client/App';

export default (req, store = {}) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <App />
      </StaticRouter>
    </Provider>,
  );
  return htmlTemplate(content, store);
};
