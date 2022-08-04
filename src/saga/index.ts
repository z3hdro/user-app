import {takeEvery} from 'redux-saga/effects';
import {TYPES} from '../redux/constants';
import fetchUsers from './users';

export default function* rootSaga() {
  yield takeEvery(TYPES.USERS_FETCH_REQUESTED, fetchUsers);
}
