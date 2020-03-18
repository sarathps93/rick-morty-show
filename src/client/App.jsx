import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import SearchControls from './containers/searchControls/SearchControls';

const Routes = () => (
  <>
    <Header />
    <SearchControls />
    <Switch>
      <Route exact path="/" component={() => <div>Hello</div>} />
    </Switch>
  </>
);

export default Routes;
