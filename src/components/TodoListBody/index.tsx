import React, { useEffect } from 'react';
import _ from 'lodash';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import EditIcon from '@material-ui/icons/Edit';
import { TodoType } from 'store/types/Todo';
import { UserType } from 'store/types/User';
import { TodoFilter, FilterOrder } from 'store/types/TodoFilter';
import { useDispatch } from 'react-redux';
import { removeTodo } from 'store/todos/action-creators';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';

const getUsername = (todo: TodoType, users: Array<UserType>): string => {
  let username: string = '-';
  const user: UserType | undefined = users.find(user => user.id.toString() === todo.userId.toString());

  if (user) {
    username = user.name;
  }

  return username;
}

const filterByStatus = (todos: Array<TodoType>, order: FilterOrder): Array<TodoType> => {
  const sortedTodos = todos.sort(todo => {
    if (todo.completed) {
      return 1;
    }

    return -1;
  });

  if (order === 'desc') {
    return sortedTodos;
  }

  return sortedTodos.reverse();
}

const filterByAuthor = (todos: Array<TodoType>, users: Array<UserType>, order: FilterOrder): Array<TodoType> => {
  return _.orderBy(todos, [todo => {
    const author = getUsername(todo, users);

    return author.toLowerCase();
  }], [order]);
}

const filterByTitle = (todos: Array<TodoType>, order: FilterOrder): Array<TodoType> => {
  return _.orderBy(todos, [todo => todo.title.toLowerCase()], [order]);
}

const applyFilter = (todos: Array<TodoType>, users: Array<UserType>, filter: TodoFilter): Array<TodoType> => {
  let todosCopy: Array<TodoType> = todos.slice();

  if (filter.searchText) {
    todosCopy = _.filter(todosCopy, (todo: TodoType) => {
      return todo.title.indexOf(filter.searchText) !== -1;
    });
  }

  if (filter.name === 'none') {
    return todosCopy;
  }

  switch (filter.name) {
    case 'status': {
      return filterByStatus(todosCopy, filter.order);
    }
    case 'author': {
      return filterByAuthor(todosCopy, users, filter.order);
    }
    case 'title': {
      return filterByTitle(todosCopy, filter.order);
    }
    default:
      return todosCopy;
  }
}

type TodoListProps = {
  todos: Array<TodoType>,
  users: Array<UserType>,
  filter: TodoFilter,
}

const TodoListBody: React.FC<TodoListProps> = ({ todos, users, filter }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const filteredTodos: Array<TodoType> = applyFilter(todos, users, filter);

  useEffect(() => {
    document.title = `Todo: ${filteredTodos.length}`;
  }, [filteredTodos, filter]);

  const handleDeleteTodo = (todo: TodoType) => {
    dispatch(removeTodo(todo));
  }

  return (
    <TableBody>
      {filteredTodos.map((todo: TodoType) => {
        const username: string = getUsername(todo, users);

        return (
          <TableRow key={todo.id} hover>
            <TableCell className={classes.completed}>
              {todo.completed ? <div className={classes.completedCell}>Yes</div>
                : <div className={classes.notCompletedCell}>No</div> || '-'}
            </TableCell>
            <TableCell className={classes.author}>{username}</TableCell>
            <TableCell className={classes.title}>{todo.title || '-'}</TableCell>
            <TableCell className={classes.actions} align="center">
              <Link to={`/edit/${todo.id}`}>
                <IconButton
                  className={classes.actionEdit}
                  aria-label="edit a todo"
                >
                  <EditIcon />
                </IconButton>
              </Link>
              <IconButton
                className={classes.actionDelete}
                aria-label="remove a todo"
                onClick={handleDeleteTodo.bind(null, todo)}
              >
                <HighlightOffIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default TodoListBody;