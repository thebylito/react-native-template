import { DefaultAction } from 'appStore/base';

export const Types = {
  GET_REQUEST: 'ota-update/GET_REQUEST',
  GET_SUCCESS: 'ota-update/GET_SUCCESS',
};

export type OTAUpdateState = {
  loading: boolean;
};

const initialState: OTAUpdateState = {
  loading: false,
};

export default function (
  state: OTAUpdateState = initialState,
  action: DefaultAction
) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { loading: true };
    case Types.GET_SUCCESS:
      return { loading: false };
    default:
      return state;
  }
}

export const OTAUpdateCreators = {
  getRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getSuccess: (haveUpdate: boolean) => ({
    type: Types.GET_SUCCESS,
    payload: haveUpdate,
  }),
};
