import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  completed: {
    width: '20%',
  },
  author: {
    width: '25%',
  },
  title: {
    width: '35%',
  },
  actions: {
    width: '20%',
  },
  actionDelete: {
    color: '#DB524B',
  },
  actionEdit: {
    color: '#808080',
  },
  completedCell: {
    display: 'inline-block',
    padding: '5px 8px',
    margin: '0 auto',
    borderRadius: '4px',
    backgroundColor: '#46810D',
    color: '#ffffff',
    fontWeight: 500,
  },
  notCompletedCell: {
    display: 'inline-block',
    width: '40px',
    padding: '5px 8px',
    margin: '0 auto',
    borderRadius: '4px',
    backgroundColor: '#DB524B',
    color: '#ffffff',
    fontWeight: 500,
    textAlign: 'center',
  },
});