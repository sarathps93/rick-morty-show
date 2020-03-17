import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import htmlTemplate from '../templates/htmlTemplate';
import Routes from '../routes';

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path}><Routes /></StaticRouter>,
  );
  return htmlTemplate(content);
};
