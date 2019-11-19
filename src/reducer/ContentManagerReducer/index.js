import types from './../../actions/types';
const {HANDLE_CONTENT_MANAGER_TEXT}=types
const initialState = {
  title:'',
  description:'',
  content:'',
  category:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CONTENT_MANAGER_TEXT:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
