export const Types = {
  GET_REQUEST: 'login/GET_REQUEST',
  GET_SUCCESS: 'login/GET_SUCCESS',
  GET_FAILURE: 'login/GET_FAILURE',
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {...state, loading: true};
    case Types.GET_SUCCESS:
      return {data: action.payload, loading: false, error: null};
    case Types.GET_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
}

export const Creators = {
  getLoginRequest: ({field1, field2}) => ({
    type: Types.GET_REQUEST,
    payload: {field1, field2},
  }),
  getLoginSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: data,
  }),
  getLoginFailure: error => ({
    type: Types.GET_FAILURE,
    payload: error,
  }),
};
