import types from '../types';
const { HANDLE_TEXT, UPDATE_STATE } = types;
export const onTextChange = payload => dispatch => {
  dispatch({
    type: HANDLE_TEXT,
    payload,
  });
};
export const updateState = (stateKey, stateValue) => dispatch => {
  dispatch({
    type: UPDATE_STATE,
    payload: { prop: stateKey, value: stateValue },
  });
};
