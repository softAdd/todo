import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import TodoPage from 'components/TodoPage';

export const history = createBrowserHistory();

const AppRouter: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={TodoPage} />
    </Switch>
  </Router>
);

export default AppRouter;