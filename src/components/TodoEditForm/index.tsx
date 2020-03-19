import React, { MouseEvent } from 'react';
import ModalOverlay from 'components/ModalOverlay';
import { useStyles } from './styles';
import { useParams, useHistory } from 'react-router';
import { TodoType } from 'store/types/Todo';
import { AppState } from 'store/types/AppState';
import { useSelector, useDispatch } from 'react-redux';
import TodoNotFound from 'components/TodoNotFound';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import TodoEditFormControls from 'components/TodoEditFormControls';
import { setTodos } from 'store/todos/action-creators';

const TodoEditForm: React.FC = () => {
  const history = useHistory();
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();

  const todos: Array<TodoType> = useSelector((state: AppState) => state.todos.todoList);
  const todo: TodoType | undefined = todos.find(todo => todo.id.toString() === id);

  const navBack = (evt?: MouseEvent): void => {
    if (evt) {
      evt.stopPropagation();
    }
    history.push('/');
  }

  const onBodyClick = (evt: MouseEvent) => evt.stopPropagation();

  if (!todo) {
    return (
      <TodoNotFound navBack={navBack} />
    )
  }

  const saveTodo = (editedTodo: TodoType): void => {
    dispatch(setTodos(todos.map(todo => {
      if (todo.id === editedTodo.id) {
        todo = editedTodo;
      }

      return todo;
    })));
    navBack();
  }

  return (
    <ModalOverlay>
      <div className={classes.overlay} onClick={navBack}>
        <div className={classes.modalBody} onClick={onBodyClick}>
          <IconButton className={classes.closeButton} onClick={navBack}>
            <CancelIcon />
          </IconButton>
          <TodoEditFormControls todo={todo} onSaveTodo={saveTodo} />
        </div>
      </div>
    </ModalOverlay>
  )
}

export default TodoEditForm;