const INITIAL_STATE = {
  wWidth: "",
  wHeight: "",
};

const sizeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_WINDOW_WIDTH": {
      return { ...state, wWidth: action.payload.wWidth };
    }
    case "GET_WINDOW_HEIGHT": {
      return { ...state, wHeight: action.payload.wHeight };
    }

    default: {
      return state;
    }
  }
};

export default sizeReducer;
