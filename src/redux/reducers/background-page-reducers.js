const INITIAL_STATE = {
  firstBackground: {
    open: false,
    height: "0px",
    move: "-30px",
  },
  secondBackground: {
    open: false,
    height: "0px",
    move: "30px",
  },
  thirdBackground: {
    open: false,
    height: "0px",
    move: "30px",
  },
};

const backgroundPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "BACKGROUND_ANIMATION": {
      return {
        ...state,
        firstBackground: {
          ...state.firstBackground,
          move: "0px",
        },
        secondBackground: {
          ...state.secondBackground,
          move: "0px",
        },
        thirdBackground: {
          ...state.thirdBackground,
          move: "0px",
        },
      };
    }
    case "OPEN_FIRST_BACKGROUND": {
      return {
        ...state,
        firstBackground: {
          ...state.firstBackground,
          open: !state.firstBackground.open,
          height: state.firstBackground.open ? "0px" : "80px",
        },
        secondBackground: {
          ...state.secondBackground,
          open: false,
          height: "0px",
        },
        thirdBackground: {
          ...state.thirdBackground,
          open: false,
          height: "0px",
        },
      };
    }
    case "OPEN_SECOND_BACKGROUND": {
      return {
        ...state,
        firstBackground: {
          ...state.firstBackground,
          open: false,
          height: "0px",
        },
        secondBackground: {
          ...state.secondBackground,
          open: !state.secondBackground.open,
          height: state.secondBackground.open ? "0px" : "160px",
        },
        thirdBackground: {
          ...state.thirdBackground,
          open: false,
          height: "0px",
        },
      };
    }
    case "OPEN_THIRD_BACKGROUND": {
      return {
        ...state,
        firstBackground: {
          ...state.firstBackground,
          open: false,
          height: "0px",
        },
        secondBackground: {
          ...state.secondBackground,
          open: false,
          height: "0px",
        },
        thirdBackground: {
          ...state.thirdBackground,
          open: !state.thirdBackground.open,
          height: state.thirdBackground.open ? "0px" : "140px",
        },
      };
    }

    case "OPEN_FIRST_BACKGROUND_LANDSCAPE": {
      return {
        ...state,
        firstBackground: {
          ...state.firstBackground,
          open: !state.firstBackground.open,
          height: state.firstBackground.open ? "0px" : "60px",
        },
        secondBackground: {
          ...state.secondBackground,
          open: false,
          height: "0px",
        },
        thirdBackground: {
          ...state.thirdBackground,
          open: false,
          height: "0px",
        },
      };
    }
    case "OPEN_SECOND_BACKGROUND_LANDSCAPE": {
      return {
        ...state,
        firstBackground: {
          ...state.firstBackground,
          open: false,
          height: "0px",
        },
        secondBackground: {
          ...state.secondBackground,
          open: !state.secondBackground.open,
          height: state.secondBackground.open ? "0px" : "80px",
        },
        thirdBackground: {
          ...state.thirdBackground,
          open: false,
          height: "0px",
        },
      };
    }
    case "OPEN_THIRD_BACKGROUND_LANDSCAPE": {
      return {
        ...state,
        firstBackground: {
          ...state.firstBackground,
          open: false,
          height: "0px",
        },
        secondBackground: {
          ...state.secondBackground,
          open: false,
          height: "0px",
        },
        thirdBackground: {
          ...state.thirdBackground,
          open: !state.thirdBackground.open,
          height: state.thirdBackground.open ? "0px" : "60px",
        },
      };
    }

    case "CLOSE_BACKGROUND": {
      return {
        ...state,
        firstBackground: {
          ...state.firstBackground,
          open: false,
          height: "0px",
          move: "-30px",
        },
        secondBackground: {
          ...state.secondBackground,
          open: false,
          height: "0px",
          move: "30px",
        },
        thirdBackground: {
          ...state.thirdBackground,
          open: false,
          height: "0px",
          move: "30px",
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default backgroundPageReducer;
