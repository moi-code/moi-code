import types from "../types";
const { HANDLE_TEXT } = types;
export const onTextChange = payload => dispatch => {
  dispatch({
    type: HANDLE_TEXT,
    payload
  });
};
