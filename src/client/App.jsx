import React from 'react';

import Header from './components/header/Header';
import SearchControls from './containers/searchControls/SearchControls';
import CharacterDetailsContainer from './containers/characterDetails/CharacterDetails';

const Routes = () => (
  <>
    <Header />
    <SearchControls />
    <CharacterDetailsContainer />
  </>
);

export default Routes;
