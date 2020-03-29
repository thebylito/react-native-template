import { all, fork } from 'redux-saga/effects';
import login from './login';

function* rootSaga() {
  yield all([fork(login)]);
}

export default rootSaga;
