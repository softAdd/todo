import { User } from './User';

export type UsersApiState = {
  userList: Array<User>,
  isFetching: boolean,
  error: string | null,
}