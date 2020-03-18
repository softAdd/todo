import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import TodoTable from 'components/TodoTable';
import { useDispatch } from 'react-redux';
import { fetchTodosThunk } from 'store/todos/action-creators';
import { fetchUsersThunk } from 'store/users/action-creators';
import useEffectOnce from 'hooks/useEffectOnce';

const TodoPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffectOnce(() => {
    dispatch(fetchTodosThunk());
    dispatch(fetchUsersThunk());
  });

  return (
    <Container maxWidth={false} disableGutters>
      <AppBar position="static">
        <Toolbar>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <TodoTable />
      </Container>
    </Container>
  )
}

export default TodoPage;