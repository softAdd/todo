import { combineReducers } from 'redux';

import todoList from './todo-list';
import todosApi from './todos-api';

export default combineReducers({
  todoList,
  todosApi,
})