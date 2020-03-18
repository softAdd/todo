import React, { useEffect } from 'react';
import _ from 'lodash';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { Todo } from 'store/types/Todo';
import { User } from 'store/types/User';
import { TodoFilter, FilterOrder } from 'store/types/TodoFilter';
import { useDispatch } from 'react-redux';
import { removeTodo } from 'store/todos/action-creators';

const getUsername = (todo: Todo, users: Array<User>): string => {
  let username: string = '-';
  const user: User | undefined = users.find(user => user.id === todo.userId);

  if (user) {
    username = user.name;
  }

  return username;
}

const filterByStatus = (todos: Array<Todo>, order: FilterOrder): Array<Todo> => {
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

const filterByAuthor = (todos: Array<Todo>, users: Array<User>, order: FilterOrder): Array<Todo> => {
  return _.orderBy(todos, [todo => {
    const author = getUsername(todo, users);

    return author.toLowerCase();
  }], [order]);
}

const filterByTitle = (todos: Array<Todo>, order: FilterOrder): Array<Todo> => {
  return _.orderBy(todos, [todo => todo.title.toLowerCase()], [order]);
}

const applyFilter = (todos: Array<Todo>, users: Array<User>, filter: TodoFilter): Array<Todo> => {
  let todosCopy: Array<Todo> = todos.slice();

  if (filter.searchText) {
    todosCopy = _.filter(todosCopy, (todo: Todo) => {
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
  todos: Array<Todo>,
  users: Array<User>,
  filter: TodoFilter,
}

const TodoListBody: React.FC<TodoListProps> = ({ todos, users, filter }) => {
  const dispatch = useDispatch();

  const filteredTodos: Array<Todo> = applyFilter(todos, users, filter);

  useEffect(() => {
    document.title = `Todo List: ${filteredTodos.length}`;
  }, [filteredTodos, filter]);

  const handleDeleteTodo = (todo: Todo) => {
    dispatch(removeTodo(todo));
  }

  return (
    <TableBody>
      {filteredTodos.map((todo: Todo) => {
        const username: string = getUsername(todo, users);

        return (
          <TableRow key={todo.id} hover>
            <TableCell>{todo.completed ? 'Yes' : 'No' || '-'}</TableCell>
            <TableCell>{username}</TableCell>
            <TableCell>{todo.title || '-'}</TableCell>
            <TableCell align="right">
              <Button
                variant="text"
                color="secondary"
                onClick={handleDeleteTodo.bind(null, todo)}
              >
                <HighlightOffIcon />
              </Button>
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default TodoListBody;