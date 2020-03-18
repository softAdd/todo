import { combineReducers } from 'redux';

import todoList from './todo-list';
import todosApi from './todos-api';
import todoFilter from './todo-filter'

export default combineReducers({
  todoList,
  todosApi,
  todoFilter,
})