import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import TodoPage from 'components/TodoPage';
import TodoEditForm from 'components/TodoEditForm';

export const history = createBrowserHistory();

const AppRouter: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={TodoPage} />
      </Switch>
      <Route path="/edit/:id" component={TodoEditForm} />
    </Router>
  )
}

export default AppRouter;