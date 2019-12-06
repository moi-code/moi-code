import types from '../../actions/types';

const { GOT_BLOG_DATA } = types;
const initialState = {
  blogs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_BLOG_DATA:
      return { ...state, guides: action.payload.value };
    default:
      return state;
  }
};
