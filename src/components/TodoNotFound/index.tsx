import React, { MouseEvent } from 'react';
import { useStyles } from './styles';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import ModalOverlay from 'components/ModalOverlay';

type TodoNotFoundProps = {
  navBack: (evt: MouseEvent) => void,
}

const TodoNotFound: React.FC<TodoNotFoundProps> = ({ navBack }) => {
  const classes = useStyles();

  const onBodyClick = (evt: MouseEvent) => evt.stopPropagation();

  return (
    <ModalOverlay>
      <div className={classes.overlay} onClick={navBack}>
        <div className={classes.modalBody} onClick={onBodyClick}>
          <IconButton className={classes.closeButton} onClick={navBack}>
            <CancelIcon />
          </IconButton>
          Todo is not found.
        </div>
      </div>
    </ModalOverlay>
  )
}

export default TodoNotFound;