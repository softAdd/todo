import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import todos from './todos/reducers';
import users from './users/reducers';
import { AppState } from './types/AppState';
import { AppActions } from './types/AppActions';

export const rootReducer = combineReducers({
  todos,
  users,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [(thunk as ThunkMiddleware<AppState, AppActions>)];


export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware),
  ),
);