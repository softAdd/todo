import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import TableSortLabel from '@material-ui/core/TableSortLabel';

type HeadCell = {
  id: string,
  label: string,
  last: boolean,
}

const headCells: Array<HeadCell> = [
  { id: 'task-status', label: 'Completed', last: false, },
  { id: 'task-author', label: 'Author', last: false, },
  { id: 'task-name', label: 'Title', last: false, },
  { id: 'task-actions', label: 'Actions', last: true, },
]

export default () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell colSpan={3}>
          <TextField
            label="Search tasks"
            type="text"
            autoComplete="current-password"
          />
        </TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        {headCells.map(headCell => {
          return (
            <TableCell
              key={headCell.id}
              align={headCell.last ? "right" : "left"}
            >
              <TableSortLabel>
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
}