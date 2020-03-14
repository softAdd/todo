import React from 'react';
import { connect } from 'react-redux';
import { Todo } from 'redux/todos/types/Todo';
import { removeTodo } from '../../redux/todos/actions';
import { AppState, AppActions } from 'redux/store';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';

const TodoList = ({ todos, onRemoveTodo }: Props) => {
  return (
    <ul>
      {todos && todos.map(todo => (
        <li key={todo.id} onClick={() => onRemoveTodo(todo)}>{todo.title}</li>
      ))}
    </ul>
  );
}

type Props = TodoListProps & LinkStateProp & LinkDispatchProps;

type TodoListProps = {
  todos?: Array<Todo>,
}

type LinkStateProp = {
  todos: Array<Todo>,
}

type LinkDispatchProps = {
  onRemoveTodo: (todo: Todo) => void;
}

const mapStateToProps = (state: AppState, ownProps: TodoListProps) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>, ownProps: TodoListProps) => ({
  onRemoveTodo: bindActionCreators(removeTodo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);