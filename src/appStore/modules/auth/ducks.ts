import { DefaultAction } from 'appStore/base';

export const Types = {
  GET_REQUEST: 'auth/GET_REQUEST',
  GET_SUCCESS: 'auth/GET_SUCCESS',
  GET_FAILURE: 'auth/GET_FAILURE',
};

export type AuthReducer = {};

const initialState = {};

export default function auth(state = initialState, action: DefaultAction) {
  switch (action.type) {
    default:
      return state;
  }
}

export const Creators = {
  getAuthRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getAuthSuccess: () => ({
    type: Types.GET_SUCCESS,
  }),
  getAuthFailure: () => ({
    type: Types.GET_FAILURE,
  }),
};
