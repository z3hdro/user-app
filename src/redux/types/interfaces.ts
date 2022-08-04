import {Action} from 'redux';
import {TYPES} from '../constants';

export interface State {
  users: any[];
  error: '';
}

export interface setUsersAction
  extends Action<typeof TYPES.USERS_FETCH_SUCCEEDED> {
  [key: string]: any;
}

export interface setErrorAction
  extends Action<typeof TYPES.USERS_FETCH_FAILED> {
  [key: string]: any;
}

export type Actions = setUsersAction | setErrorAction;
