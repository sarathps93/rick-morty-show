import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../routes';
import '../styles/root-sass.scss';

ReactDOM.hydrate(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById('root'));
