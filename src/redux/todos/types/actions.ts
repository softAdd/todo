import { Todo } from './Todo';  

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_TODOS = 'SET_TODOS';

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

export type TodosActionTypes = SetTodosAction | EditTodoAction | RemoveTodoAction | AddTodoAction;