import {Action} from 'redux';
import {Types} from '../constants';

export interface State {
  users: any[];
}

export interface setUsersAction
  extends Action<typeof Types.USERS_FETCH_SUCCEEDED> {
  [key: string]: any;
}

export type Actions = setUsersAction;
