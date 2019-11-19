import types from "../../actions/types";

const { HANDLE_TEXT, CLEAR_GEN_STATE } = types;
const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  title: "",
  description: "",
  content: "",
  category: "",
  tags:""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_TEXT:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CLEAR_GEN_STATE:
      return { ...state, ...initialState };
    default:
      return state;
  }
};
