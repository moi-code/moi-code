import types from '../../actions/types';

const { SET_LOGIN_TEXT,LOGIN_USER_FAIL,LOGIN_USER_SUCCESS, IS_AUTHED } = types;

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  auth:false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTHED:
      return {...state,auth:action.payload.auth}
    case SET_LOGIN_TEXT:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
