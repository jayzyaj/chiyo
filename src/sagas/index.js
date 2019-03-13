import { all } from 'redux-saga/effects';
import authSaga from './Authenticate';

export default function* rootSaga() {
  yield all([
    ...authSaga,
  ]);
}
