import types from '../../actions/types';

const { SET_LOGIN_TEXT } = types;

const initialState = {
  email: '',
  password: '',
  confirmPassword: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_TEXT:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
