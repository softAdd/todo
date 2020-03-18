import React, { useState } from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterSearchText, setFilter, setFilterOrder } from 'store/todos/action-creators';
import { FilterOrder, FilterName } from 'store/types/TodoFilter';
import { AppState } from 'store/types/AppState';

type HeadCellType = {
  id: string,
  filter: FilterName,
  label: string,
  active: boolean,
}

const TodoTableHead: React.FC = () => {
  const dispatch = useDispatch();
  const currentFilterName: FilterName = useSelector((state: AppState) => state.todos.todoFilter.name);
  const currentFilterOrder: FilterOrder = useSelector((state: AppState) => state.todos.todoFilter.order);

  const [headCells, updateCells]: [Array<HeadCellType>, Function] = useState([
    { id: 'task-status', label: 'Completed', filter: 'status', active: false },
    { id: 'task-author', label: 'Author', filter: 'author', active: false },
    { id: 'task-title', label: 'Title', filter: 'title', active: false },
    { id: 'task-actions', label: 'Actions', filter: 'none', active: false },
  ]);

  const handleSearchTyping = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const searchText = evt.target.value;
    dispatch(setFilterSearchText(searchText));
  }

  const toggleFilter = (selectedHeadCell: HeadCellType): void => {
    const selectedFilter: FilterName = selectedHeadCell.filter;

    dispatch(setFilter(selectedFilter));
    
    updateCells(headCells.map(headCell => {
      if (headCell.id === selectedHeadCell.id) {
        return { ...headCell, active: true };
      }
      
      return { ...headCell, active: false };
    }));

    if (currentFilterName === selectedFilter) {
      const updatedFilter = currentFilterOrder === 'asc' ? 'desc' : 'asc';
      dispatch(setFilterOrder(updatedFilter));
    } else {
      dispatch(setFilterOrder('asc'));
    }
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell colSpan={3}>
          <TextField
            label="Search title"
            type="text"
            onChange={handleSearchTyping}
          />
        </TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        {headCells.map((headCell, cellMapId) => {
          const { id, label, active } = headCell;

          if (headCells.length === (cellMapId + 1)) {
            return (
              <TableCell
                key={id}
                align="right"
              >
                {label}
              </TableCell>
            )
          }

          return (
            <TableCell
              key={headCell.id}
              onClick={toggleFilter.bind(null, headCell)}
            >
              <TableSortLabel
                direction={active ? currentFilterOrder : 'asc'}
                active={active}
              >
                {label}
              </TableSortLabel>
            </TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
}

export default TodoTableHead;