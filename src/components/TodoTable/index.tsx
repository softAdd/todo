import React from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';

import { TodoType } from 'store/types/Todo';
import { UserType } from 'store/types/User';
import { TodoFilter } from 'store/types/TodoFilter';
import { AppState } from 'store/types/AppState';
import { useSelector } from 'react-redux';

import TodoTableHead from 'components/TodoTableHead';
import TodoListBody from 'components/TodoListBody';

 const TodoTable: React.FC = () => {
  const todos: Array<TodoType> = useSelector((state: AppState) => state.todos.todoList);
  const users: Array<UserType> = useSelector((state: AppState) => state.users.userList);
  const filter: TodoFilter = useSelector((state: AppState) => state.todos.todoFilter);

  return (
    <Paper elevation={2}>
      <TableContainer>
        <Table>
          <TodoTableHead />
          <TodoListBody todos={todos} users={users} filter={filter} />
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default TodoTable;