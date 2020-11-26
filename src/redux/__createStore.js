const createStore = (rootReducer, initialState) => {
  let state = rootReducer(initialState, { type: "__INIT__" });
  const subs = [];

  //observer pattern
  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subs.forEach((sub) => sub());
    },
    subscribe(callback) {
      subs.push(callback);
    },
    getState() {
      return state;
    },
  };
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: action.payload + 1 };
    case "DECREMENT":
      return { ...state, counter: action.payload - 1 };
    default:
      return state;
  }
};

// export { createStore, rootReducer };
