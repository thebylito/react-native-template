import { all, fork } from 'redux-saga/effects';

import app from 'appStore/modules/app/sagas';
import auth from 'appStore/modules/auth/sagas';
import OTAUpdate from 'appStore/modules/otaUpdate/sagas';

function* rootSagas() {
  yield all([fork(OTAUpdate), fork(app), fork(auth)]);
}

export default rootSagas;
