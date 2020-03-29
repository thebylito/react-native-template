import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from 'services/api';
import { Creators as LoginActions, Types as LoginTypes } from 'appStore/ducks/login';
import interceptResponse from 'services/interceptResponse';
import interceptError from 'services/interceptError';

function* getLogin({ payload: { field1, field2 } }) {
  try {
    const response = yield call(api.post, '/myApi', {
      field1,
      field2,
    });
    yield interceptResponse(response);
    yield put(LoginActions.getLoginSuccess(response.data));
  } catch (err) {
    // Dispatch an action with error
    const message = yield interceptError(LoginActions.getLoginFailure, err);
    console.tron.log(message);
  }
}

export default function* LoginSagas() {
  yield all([takeLatest(LoginTypes.GET_REQUEST, getLogin)]);
}
