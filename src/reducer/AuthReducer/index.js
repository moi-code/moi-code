import types from "../../actions/types";

const {
  AUTHORIZED,
  HANDLE_USER_DATA,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS
} = types;

const initialState = {
  authed: false,
  userData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZED:
      return { ...state, authed: action.payload.authed };
    case HANDLE_USER_DATA:
      return { ...state, userData: action.payload.userData };
    case LOGIN_USER_SUCCESS:
      return { ...state, authed: true };
    case LOGIN_USER_FAIL:
      return { ...state, authed: false };
    default:
      return state;
  }
};
