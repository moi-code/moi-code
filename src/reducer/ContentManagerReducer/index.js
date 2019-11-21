import types from "./../../actions/types";
const {
  HANDLE_CONTENT_MANAGER_TEXT,
  CONTENT_POST_SUCCESS,
  CONTENT_POST_FAIL
} = types;
const initialState = {
  contentPostSuccess: null,
  contentPostFail: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONTENT_POST_SUCCESS:
      return { ...state, contentPostSuccess: true };
    case CONTENT_POST_FAIL:
      return { ...state, contentPostFail: false };
    default:
      return state;
  }
};
