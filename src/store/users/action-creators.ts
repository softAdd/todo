import { User } from 'store/types/User';
import { Dispatch } from 'redux';
import axios from 'axios';
import {
  UsersActionTypes,
  SET_USERS,
  SET_FETCHING_USERS,
  SET_FETCH_USERS_ERROR,
  SET_FETCH_USERS_SUCCESS,
} from './action-types';
import { AppActions } from 'store/types/AppActions';
import { AppState } from 'store/types/AppState';

export const setUsers = (users: Array<User>): UsersActionTypes => ({
  type: SET_USERS,
  users,
});

export const setFetchingUsers = (): UsersActionTypes => ({
  type: SET_FETCHING_USERS,
});

export const setFetchUsersError = (error: string): UsersActionTypes => ({
  type: SET_FETCH_USERS_ERROR,
  error,
});

export const setFetchUsersSuccess = (): UsersActionTypes => ({
  type: SET_FETCH_USERS_SUCCESS,
});

export const fetchUsersThunk = () => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
  try {
    dispatch(setFetchingUsers())
    const response = await axios.get('http://jsonplaceholder.typicode.com/users');
    dispatch(setFetchUsersSuccess());
    dispatch(setUsers(response.data));
  } catch (err) {
    dispatch(setFetchUsersError(err.message));
  }
}