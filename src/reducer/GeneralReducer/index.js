import types from '../../actions/types';

const { HANDLE_TEXT, CLEAR_GEN_STATE, UPDATE_STATE } = types;
const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  userName: '',
  profileUrl: '',
  title: '',
  description: '',
  content: '',
  category: '',
  tags: '',
  isServer: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case HANDLE_TEXT:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CLEAR_GEN_STATE:
      return { ...state, ...initialState };
    default:
      return state;
  }
};
