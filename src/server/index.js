import express from 'express';

import logger from '../utils/logger';
import renderer from './renderer';
import createStore from '../redux/createStore';

const PORT = process.env.PORT || 8081;
const app = express();

app.get('*', (req, res) => {
  const store = createStore();
  if (req.path !== '/') {
    res.redirect('/');
  }
  res.end(renderer(req, store));
});

app.listen(PORT, () => {
  logger.info(`App is started and listening on port ${PORT}`);
});
