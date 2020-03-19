import React from 'react';
import { useStyles } from './styles';

const ModalOverlay: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.overlay}>
      {children}
    </div>
  )
}

export default ModalOverlay;