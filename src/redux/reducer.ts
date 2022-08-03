import {Reducer} from 'redux';
import {Types} from './constants';
import {Actions, State} from './types';

export const initialState: State = {
  users: [],
};

const reducer: Reducer<State, Actions> = (state = initialState, action) => {
  switch (action.type) {
    case Types.USERS_FETCH_SUCCEEDED:
      return {
        users: action.users,
      };
    default:
      return state;
  }
};

export default reducer;
