import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';

import { Todo } from 'store/types/Todo';
import { User } from 'store/types/User';
import { AppState } from 'store/types/AppState';
import { useSelector } from 'react-redux';

import TodoTableHead from 'components/TodoTableHead';

const getUsername = (todo: Todo, users: Array<User>): string => {
  let username = 'Unknown user id';
  const user: User | undefined = users.find(user => user.id === todo.userId);

  if (user) {
    username = user.name;
  }

  return username;
}

export default () => {
  const todos: Array<Todo> = useSelector((state: AppState) => state.todos.todoList);
  const users: Array<User> = useSelector((state: AppState) => state.users.userList);

  return (
    <Paper elevation={2}>
      <TableContainer>
        <Table>
          <TodoTableHead />
          <TableBody>
            {todos.map((todo) => {
              const username: string = getUsername(todo, users);
              
              return (
                <TableRow key={todo.id} hover>
                  <TableCell>{todo.completed ? 'Yes' : 'No'}</TableCell>
                  <TableCell>{username}</TableCell>
                  <TableCell>{todo.title}</TableCell>
                  <TableCell align="right">{'actions'}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}