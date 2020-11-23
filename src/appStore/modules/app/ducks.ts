import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { DefaultAction } from 'appStore/base';

export const Types = {
  SET_ONESIGNAL_PLAYER_ID_REQUEST: 'app/SET_ONESIGNAL_PLAYER_ID_REQUEST',
};

export type AppReducer = {
  onesignalPlayerId: string;
};

const initialState: AppReducer = {
  onesignalPlayerId: '',
};

function app(state = initialState, action: DefaultAction) {
  switch (action.type) {
    case Types.SET_ONESIGNAL_PLAYER_ID_REQUEST:
      return { ...state, onesignalPlayerId: action.payload };
    default:
      return state;
  }
}
const appPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
  whitelist: ['onesignalPlayerId'],
};

export default persistReducer(appPersistConfig, app);

export const Creators = {
  setOnesignalPlayerRequest: (playerId: string) => ({
    type: Types.SET_ONESIGNAL_PLAYER_ID_REQUEST,
    payload: playerId,
  }),
};
