import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Todo } from 'store/types/Todo';
import { AppState } from 'store/types/AppState';
import { useSelector } from 'react-redux';

export default () => {
  const todos: Array<Todo> = useSelector((state: AppState) => state.todos.todoList)

  return (
    <Paper elevation={2}>
      <Table>
        <TableBody>
          {todos && todos.map((todo: Todo) => {
            return (
              <TableRow key={todo.id} hover>
                <TableCell>{todo.completed ? 'Выполнено' : 'Не выполнено'}</TableCell>
                <TableCell>{todo.userId}</TableCell>
                <TableCell>{todo.title}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}