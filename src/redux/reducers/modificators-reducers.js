const INITIAL_STATE = {
  // loginView: false,
  // switchSignInSignUp: false,
  burgerMenu: false,
};

const modificatorsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case "OPEN_SIGNIN": {
    //   return { ...state, loginView: true, switchSignInSignUp: false };
    // }

    // case "CLOSE_LOGIN": {
    //   return { ...state, loginView: false };
    // }

    // case "OPEN_SIGNUP": {
    //   return { ...state, switchSignInSignUp: true };
    // }

    case "OPEN_CLOSE_BURGER": {
      return { ...state, burgerMenu: !state.burgerMenu };
    }

    case "CLOSE_BURGER": {
      return { ...state, burgerMenu: false };
    }

    default: {
      return state;
    }
  }
};

export default modificatorsReducer;
