import {Types} from './constants';
import {setUsersAction} from './types';

export const setUsers = (users: any): setUsersAction => ({
  type: Types.USERS_FETCH_SUCCEEDED,
  users,
});
