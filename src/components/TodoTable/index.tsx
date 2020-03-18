import React from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';

import { Todo } from 'store/types/Todo';
import { User } from 'store/types/User';
import { AppState } from 'store/types/AppState';
import { useSelector } from 'react-redux';

import TodoTableHead from 'components/TodoTableHead';
import TodoListBody from 'components/TodoListBody';

 const TodoTable: React.FC = () => {
  const todos: Array<Todo> = useSelector((state: AppState) => state.todos.todoList);
  const users: Array<User> = useSelector((state: AppState) => state.users.userList);

  return (
    <Paper elevation={2}>
      <TableContainer>
        <Table>
          <TodoTableHead />
          <TodoListBody todos={todos} users={users} filter={{ name: 'author', order: 'desc', searchString: '' }} />
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default TodoTable;