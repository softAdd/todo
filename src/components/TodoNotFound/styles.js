import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    padding: '20px',
    background: 'none',
  },
  modalBody: {
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '200px',
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '4px',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    padding: 0,
    color: '#000000',
  }
});