import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from 'services/api';
import { Creators as AuthActions, Types as LoginTypes } from './ducks';
import interceptResponse from 'services/interceptResponse';
import interceptError from 'services/interceptError';

function* getLogin() {
  try {
    const response = yield call(api.post, '/myApi');
    yield interceptResponse(response);
    yield put(AuthActions.getAuthSuccess());
  } catch (err) {
    // Dispatch an action with error
    const message = yield interceptError(AuthActions.getAuthFailure, err);
    console.tron.log(message);
  }
}

export default function* authSagas() {
  yield all([takeLatest(LoginTypes.GET_REQUEST, getLogin)]);
}
