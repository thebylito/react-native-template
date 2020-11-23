import { combineReducers } from 'redux';

import otaUpdateReducer, {
  OTAUpdateState,
} from 'appStore/modules/otaUpdate/ducks';

import appReducer, { AppReducer } from 'appStore/modules/app/ducks';
import authReducer, { AuthReducer } from 'appStore/modules/auth/ducks';

import { PersistPartial } from 'redux-persist/es/persistReducer';

// Types/State
export type State = Readonly<{
  OTAUpdate: OTAUpdateState;
  app: AppReducer & PersistPartial;
  auth: AuthReducer;
  // Types/State
  [key: string]: any;
}>;

// Reducers
// @ts-ignore
export default combineReducers<State>({
  OTAUpdate: otaUpdateReducer,
  app: appReducer,
  auth: authReducer,
});
