import {call, put} from 'redux-saga/effects';
import {getUsers} from '../api';
import {setError, setUsers} from '../redux/actions';

export default function* fetchUsers() {
  try {
    // @ts-ignore
    const users = yield call(getUsers);
    yield put(setUsers(users));
  } catch (e: any) {
    yield put(setError(e.message as string));
  }
}
