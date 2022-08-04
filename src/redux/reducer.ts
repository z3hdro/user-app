import {Reducer} from 'redux';
import {TYPES} from './constants';
import {Actions, State} from './types';

export const initialState: State = {
  users: [],
  error: '',
};

const reducer: Reducer<State, Actions> = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.USERS_FETCH_SUCCEEDED:
      return {
        ...state,
        users: action.users,
      };
    case TYPES.USERS_FETCH_FAILED:
      return {
        ...state,
        error: action.message,
      };
    default:
      return state;
  }
};

export default reducer;
