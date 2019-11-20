import types from "../../actions/types";

const { GOT_GUIDE_DATA } = types;
const initialState = {
  guides: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_GUIDE_DATA:
      return { ...state, guides: action.payload.value };
    default:
      return state;
  }
};
