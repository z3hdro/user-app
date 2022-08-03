import {takeEvery} from 'redux-saga/effects';
import {Types} from '../redux/constants';
import fetchUsers from './users';

export default function* rootSaga() {
  yield takeEvery(Types.USERS_FETCH_REQUESTED, fetchUsers);
}
