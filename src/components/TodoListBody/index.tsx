import React from 'react';
import _ from 'lodash';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Todo } from 'store/types/Todo';
import { User } from 'store/types/User';

const getUsername = (todo: Todo, users: Array<User>): string => {
  let username: string = '-';
  const user: User | undefined = users.find(user => user.id === todo.userId);

  if (user) {
    username = user.name;
  }

  return username;
}

type Order = 'asc' | 'desc';

type FilterName = 'status' | 'author' | 'title';

type Filter = {
  name: FilterName,
  order: Order,
  searchString: string,
} | false

const filterByStatus = (todos: Array<Todo>, order: Order): Array<Todo> => {
  const sortedTodos = todos.sort(todo => {
    if (todo.completed) {
      return 1;
    }

    return -1;
  });

  if (order === 'asc') {
    return sortedTodos;
  }

  return sortedTodos.reverse();
}

const filterByAuthor = (todos: Array<Todo>, users: Array<User>, order: Order): Array<Todo> => {
  return _.orderBy(todos, [todo => {
    const author = getUsername(todo, users);

    return author.toLowerCase();
  }], [order]);
}

const filterByTitle = (todos: Array<Todo>, order: Order): Array<Todo> => {
  return _.orderBy(todos, [todo => todo.title.toLowerCase()], [order]);
}

const applyFilter = (todos: Array<Todo>, users: Array<User>, filter: Filter): Array<Todo> => {
  if (!filter) {
    return todos;
  }

  let todosCopy: Array<Todo> = todos.slice();

  if (filter.searchString) {
    todosCopy = _.filter(todosCopy, (todo: Todo) => {
      return todo.title.indexOf(filter.searchString) !== -1;
    });
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
  filter?: Filter,
}

const TodoListBody: React.FC<TodoListProps> = ({ todos, users, filter = false }) => {
  const filteredTodos: Array<Todo> = applyFilter(todos, users, filter);

  return (
    <TableBody>
      {filteredTodos.map((todo: Todo) => {
        const username: string = getUsername(todo, users);

        return (
          <TableRow key={todo.id} hover>
            <TableCell>{todo.completed ? 'Yes' : 'No' || '-'}</TableCell>
            <TableCell>{username}</TableCell>
            <TableCell>{todo.title || '-'}</TableCell>
            <TableCell align="right">{'actions'}</TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default TodoListBody;