import { Todo } from "./types/Todo";
import {
  TodosActionTypes,
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  SET_TODOS,
} from "./types/actions";

const todosInitialReducer: Array<Todo> = [
  {
    id: 1,
    userId: 1,
    title: 'title of first user',
    completed: true,
  },
  {
    id: 2,
    userId: 2,
    title: 'title of second user',
    completed: false,
  },
  {
    id: 3,
    userId: 3,
    title: 'title of third user',
    completed: true,
  },
];

const todosReducer = (
  state = todosInitialReducer,
  action: TodosActionTypes
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

export { todosReducer };