import React from 'react';
import { hot } from 'react-hot-loader';
import { Router } from '@reach/router';

import { IndexPage } from '../pages/Index/Index.page';
import { NotFoundPage } from '../pages/NotFound/NotFound.page';

import './App.css';

const AppComponent = () => (
  <Router>
    <IndexPage path="/" />
    <NotFoundPage path="/:shortlink" />
  </Router>
);

export const App = hot(module)(AppComponent);
