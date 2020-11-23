import { call, all, takeLatest } from 'redux-saga/effects';
import { Types as OTAUpdateTypes } from './ducks';
import codePush from 'react-native-code-push';
import { showNotification } from 'components/navigation/TopFlashMessages/TopFlashMessages';

function* getOTAUpdates() {
  try {
    const update = yield call(codePush.checkForUpdate);
    if (update && !update.isMandatory) {
      codePush.disallowRestart();
    }
    if (update) {
      yield call(
        codePush.sync,
        {
          installMode: update.isMandatory
            ? codePush.InstallMode.IMMEDIATE
            : codePush.InstallMode.ON_NEXT_RESTART,
        },
        status => {
          if (status === codePush.SyncStatus.UPDATE_INSTALLED) {
            showNotification({
              message:
                'O app foi atualizado. Reinicie para aplicar as alterações.',
              type: 'info',
              duration: 5000,
            });
          }
        }
      );
    }
  } catch (e) {}
}

export default function* () {
  yield all([takeLatest<any>(OTAUpdateTypes.GET_REQUEST, getOTAUpdates)]);
}
