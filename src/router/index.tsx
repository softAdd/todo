import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import TodoList from 'components/TodoList';

export const history = createBrowserHistory();

const AppRouter: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={TodoList} />
    </Switch>
  </Router>
);

export default AppRouter;