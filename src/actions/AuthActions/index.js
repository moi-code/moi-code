import types from "../types";
const { SET_LOGIN_TEXT } = types;
export const loginTextChange = payload => dispatch => {
  dispatch({
    type: SET_LOGIN_TEXT,
    payload
  });
};
export const registerUser = () => dispatch => {};
export const userLogin = () => dispatch => {};
