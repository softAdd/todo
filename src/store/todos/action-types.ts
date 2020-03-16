import { Todo } from 'store/types/Todo';  

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_TODOS = 'SET_TODOS';
export const SET_FETCHING_TODOS = 'SET_FETCHING_TODOS';
export const SET_FETCH_TODOS_SUCCESS = 'SET_FETCH_TODOS_SUCCESS';
export const SET_FETCH_TODOS_ERROR = 'SET_FETCH_TODOS_ERROR';

export type AddTodoAction = {
  type: typeof ADD_TODO,
  todo: Todo,
}

export type EditTodoAction = {
  type: typeof EDIT_TODO,
  todo: Todo,
}

export type RemoveTodoAction = {
  type: typeof REMOVE_TODO,
  todo: Todo,
}

export type SetTodosAction = {
  type: typeof SET_TODOS,
  todos: Array<Todo>,
}

export type SetFetchingTodosAction = {
  type: typeof SET_FETCHING_TODOS,
}

export type SetFetchTodosSuccessAction = {
  type: typeof SET_FETCH_TODOS_SUCCESS,
}

export type SetFetchTodosErrorAction = {
  type: typeof SET_FETCH_TODOS_ERROR,
  error: string,
}

export type TodosActionTypes = SetTodosAction | EditTodoAction | RemoveTodoAction | AddTodoAction | 
  SetFetchingTodosAction | SetFetchTodosSuccessAction | SetFetchTodosErrorAction;