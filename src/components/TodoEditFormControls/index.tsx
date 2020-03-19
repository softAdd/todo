import React, { ChangeEvent, useState } from 'react';
import { useStyles } from './styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { TodoType } from 'store/types/Todo';
import { Button } from '@material-ui/core';

type TodoEditFormControlsProps = {
  todo: TodoType,
  onSaveTodo: (editedTodo: TodoType) => void,
}

const TodoEditFormControls: React.FC<TodoEditFormControlsProps> = ({ todo, onSaveTodo }) => {
  const classes = useStyles();

  const [todoTitle, setTitle] = useState(todo.title);
  const [checkState, setCheckState] = useState(todo.completed);

  const handleInputTitle = (evt: ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value);
  }

  const handleCheckState = () => {
    setCheckState(!checkState)
  }

  return (
    <div className={classes.controlsWrapper}>
      <FormControlLabel
        control={
          <Checkbox
            name="todo completed"
            color="primary"
            onClick={handleCheckState}
            checked={checkState}
          />
        }
        label="completed"
      />
      <TextField label="title" value={todoTitle} onChange={handleInputTitle} />
      <Button
        className={classes.saveButton}
        onClick={onSaveTodo.bind(null, { ...todo, title: todoTitle, completed: checkState })}
        variant="contained"
        color="primary"
      >
        Save
      </Button>
    </div>
  )
}

export default TodoEditFormControls;