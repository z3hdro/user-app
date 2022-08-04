import {TYPES} from './constants';
import {setErrorAction, setUsersAction} from './types';

export const setUsers = (users: any): setUsersAction => ({
  type: TYPES.USERS_FETCH_SUCCEEDED,
  users,
});

export const setError = (error: string): setErrorAction => ({
  type: TYPES.USERS_FETCH_FAILED,
  message: error,
});
