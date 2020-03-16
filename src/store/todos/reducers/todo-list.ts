import { Todo } from 'store/types/Todo';
import {
  TodosActionTypes,
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  SET_TODOS,
} from '../action-types';

const todosInitialReducer: Array<Todo> = [];

export default (
  state = todosInitialReducer,
  action: TodosActionTypes,
): Array<Todo> => {

  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case EDIT_TODO:
      return [...state, action.todo];
    case REMOVE_TODO: {
      const removableId = action.todo.id;

      return state.filter(({ id }) => id !== removableId);
    }
    case SET_TODOS:
      return action.todos;
    default:
      return state;
  }
}