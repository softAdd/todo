import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  head: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  controlButtonsContainer: {
    width: '20%',
  },
  controlButtons: {
    display: 'inline-flex',
    '& button + button': {
      marginLeft: '7px',
    }
  },
  styledSelect: {
    minWidth: '180px',
    paddingTop: '16.5px',
    marginLeft: '16px',
  },
  styledSearch: {
    minWidth: '150px',
    marginLeft: '16px',
  },
  styledCheckbox: {
    paddingTop: '16px',
    marginRight: '0',
  },
  controlInputs: {
    display: 'flex',
    alignItems: 'center',
  }
});