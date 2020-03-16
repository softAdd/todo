import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import TodoTable from 'components/TodoTable';
import { useDispatch } from 'react-redux';
import { fetchTodosThunk } from 'store/todos/action-creators';
import useEffectOnce from 'hooks/useEffectOnce';

export default () => {
  const dispatch = useDispatch();

  useEffectOnce(() => {
    dispatch(fetchTodosThunk());
  });

  return (
    <Container maxWidth={false} disableGutters={true}>
      <AppBar position="static">
        <Toolbar>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <TodoTable />
      </Container>
    </Container>
  )
}