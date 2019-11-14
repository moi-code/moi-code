const initialState = {
  quote: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case AUTHORIZE_USER:
    //   console.log("<", action.payload);
    //   return {
    //     ...state,
    //     isAuthenticated: !isEmpty(action.payload),
    //     user: action.payload
    //   };
    default:
      return state;
  }
};
