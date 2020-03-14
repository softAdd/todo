import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { todosReducer } from './todos/reducers';
import { TodosActionTypes } from './todos/types/actions';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppActions = TodosActionTypes;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>),
);