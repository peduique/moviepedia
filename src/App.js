import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

const HomePage = lazy(() => import('~/pages/Home'));

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
