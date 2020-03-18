import express from 'express';

import logger from '../utils/logger';
import renderer from './renderer';
import createStore from '../redux/createStore';
import actions from '../redux/actions';
import env from '../../env';

const PORT = process.env.PORT || 8081;
const app = express();
const staticFolder = env === 'production' ? 'public' : 'dist';

app.use(express.static(staticFolder));

app.get('*', (req, res) => {
  if (req.path !== '/') {
    res.redirect('/');
  }
  const store = createStore();
  store.dispatch(actions.fetchCharactersData()).then(() => res.end(renderer(req, store)));
});

app.listen(PORT, () => {
  logger.info(`App is started and listening on port ${PORT}`);
});
