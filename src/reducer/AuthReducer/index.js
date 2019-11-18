import types from "../../actions/types";

const {
  SET_LOGIN_TEXT,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  IS_AUTHED
} = types;

const initialState = {
  authed: false,
  email: "",
  password: "",
  confirmPassword: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTHED:
      return { ...state, authed: action.payload.auth };
    case LOGIN_USER_SUCCESS:
      return { ...state, authed: true, email: "", password: "" };
    case LOGIN_USER_FAIL:
      return { ...state, authed: false };
    case SET_LOGIN_TEXT:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
