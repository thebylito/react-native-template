import {call, put, all, takeLatest} from 'redux-saga/effects';
import api from 'services/api';
import {Creators as LoginActions, Types as LoginTypes} from 'store/ducks/login';

function* getLogin({payload: {field1, field2}}) {
  try {
    const response = yield call(api.post, '/myApi', {
      field1,
      field2,
    });
    yield put(LoginActions.getLoginSuccess(response.data));
  } catch (err) {
    yield put(LoginActions.getLoginFailure('Erro ao buscar dados da API'));
  }
}

export default function* LoginSagas() {
  yield all([takeLatest(LoginTypes.GET_REQUEST, getLogin)]);
}
