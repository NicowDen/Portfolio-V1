const INITIAL_STATE = {
  theme: "theme_1",
};

const themesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_THEME": {
      return { ...state, theme: action.payload.theme };
    }

    default: {
      return state;
    }
  }
};

export default themesReducer;
