import { Dispatch } from 'redux';
import axios from 'axios';

import {
  TodosActionTypes,
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  SET_TODOS,
  SET_FETCHING_TODOS,
  SET_FETCH_TODOS_SUCCESS,
  SET_FETCH_TODOS_ERROR,
  SET_FILTER,
  SET_FILTER_ORDER,
  SET_FILTER_SEARCH_TEXT,
} from './action-types';

import { Todo } from 'store/types/Todo';
import { AppActions } from 'store/types/AppActions';
import { AppState } from 'store/types/AppState';
import { FilterName, FilterOrder } from 'store/types/TodoFilter';


export const addTodo = (todo: Todo): TodosActionTypes => ({
  type: ADD_TODO,
  todo,
});

export const editTodo = (todo: Todo): TodosActionTypes => ({
  type: EDIT_TODO,
  todo,
});

export const removeTodo = (todo: Todo): TodosActionTypes => ({
  type: REMOVE_TODO,
  todo,
});

export const setTodos = (todos: Array<Todo>): TodosActionTypes => ({
  type: SET_TODOS,
  todos,
});

export const setFetchingTodos = (): TodosActionTypes => ({
  type: SET_FETCHING_TODOS,
});

export const setFetchTodosSuccess = (): TodosActionTypes => ({
  type: SET_FETCH_TODOS_SUCCESS,
});

export const setFetchTodosError = (error: string): TodosActionTypes => ({
  type: SET_FETCH_TODOS_ERROR,
  error,
});

export const setFilter = (name: FilterName): TodosActionTypes => ({
  type: SET_FILTER,
  name,
});

export const setFilterOrder = (order: FilterOrder)  => ({
  type: SET_FILTER_ORDER,
  order,
});

export const setFilterSearchText = (searchText: string) => ({
  type: SET_FILTER_SEARCH_TEXT,
  searchText,
})

export const fetchTodosThunk = () => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
  try {
    dispatch(setFetchingTodos())
    const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
    dispatch(setFetchTodosSuccess());
    dispatch(setTodos(response.data));
  } catch (err) {
    dispatch(setFetchTodosError(err.message));
  }
}