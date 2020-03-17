import express from 'express';
import logger from '../utils/logger';

import renderer from './renderer';

const PORT = process.env.PORT || 8081;
const app = express();

app.get('*', (req, res) => {
  if (req.path !== '/') {
    res.redirect('/');
  }
  res.end(renderer(req));
});

app.listen(PORT, () => {
  logger.info(`App is started and listening on port ${PORT}`);
});
