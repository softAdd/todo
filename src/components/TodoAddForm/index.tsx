import React, { useState } from 'react';
import _ from 'lodash';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { useStyles } from './styles';
import { UserType } from 'store/types/User';
import { AppState } from 'store/types/AppState';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from 'store/todos/action-creators';
import { TodoType } from 'store/types/Todo';


type TodoAddFormProps = {
  toggleAddForm: () => void,
}

type TodoAddFormState = {
  checkCompleted: boolean,
  selectUserId: string,
  inputTitle: string,
}

const initialState: TodoAddFormState = {
  checkCompleted: false,
  selectUserId: '',
  inputTitle: '',
}

const TodoAddForm: React.FC<TodoAddFormProps> = ({ toggleAddForm }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const users: Array<UserType> = useSelector((state: AppState) => state.users.userList);

  const [controls, setControls] = useState(initialState);

  const handleCheckCompleted = () => {
    setControls({ ...controls, checkCompleted: !controls.checkCompleted });
  }

  const handleSelectUsername = (evt: React.ChangeEvent<{ value: unknown }>) => {
    setControls({ ...controls, selectUserId: evt.target.value as string });
  }

  const handleInputTitle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setControls({ ...controls, inputTitle: evt.target.value });
  }

  const handleAdd = (): void => {
    const todo: TodoType = {
      completed: controls.checkCompleted,
      id: _.uniqueId('todo_'),
      title: controls.inputTitle,
      userId: controls.selectUserId,
    }

    dispatch(addTodo(todo));
    setControls({ ...initialState, checkCompleted: controls.checkCompleted });
  }

  return (
    <TableRow className={classes.head}>
      <TableCell colSpan={3}>
        <Box className={classes.controlInputs}>
          <FormControlLabel className={classes.styledCheckbox}
            control={
              <Checkbox
                checked={controls.checkCompleted}
                onChange={handleCheckCompleted}
                name="completed"
                color="primary"
              />
            }
            label="completed"
          />
          <Select
            value={controls.selectUserId}
            onChange={handleSelectUsername}
            className={classes.styledSelect}
          >
            {users.map(user => (
              <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
            ))}
          </Select>
          <TextField label="title" onChange={handleInputTitle} value={controls.inputTitle} className={classes.styledSearch} />
        </Box>
      </TableCell>
      <TableCell align="right" className={classes.controlButtonsContainer}>
        <Box className={classes.controlButtons}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAdd}
          >
            Add
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={toggleAddForm}
          >
            Back
          </Button>
        </Box>
      </TableCell>
    </TableRow>
  )
}

export default TodoAddForm;