import { Todo } from "./types/Todo";
import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  SET_TODOS,
  TodosActionTypes
} from "./types/actions";

export const addTodo = (todo: Todo): TodosActionTypes => ({
  type: ADD_TODO,
  todo
});

export const editTodo = (todo: Todo): TodosActionTypes => ({
  type: EDIT_TODO,
  todo
});

export const removeTodo = (todo: Todo): TodosActionTypes => ({
  type: REMOVE_TODO,
  todo
});

export const setTodos = (todos: Array<Todo>): TodosActionTypes => ({
  type: SET_TODOS,
  todos
});