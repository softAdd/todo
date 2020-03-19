import { TodosActionTypes } from "store/todos/action-types";
import { UsersActionTypes } from "store/users/action-types";

export type AppActions = TodosActionTypes | UsersActionTypes;