const INITIAL_STATE = {
  firstFormation: {
    open: false,
    height: "0px",
    move: "-30px",
  },
  secondFormation: {
    open: false,
    height: "0px",
    move: "30px",
  },
  thirdFormation: {
    open: false,
    height: "0px",
    move: "30px",
  },
};

const formationsPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FORMATIONS_ANIMATION": {
      return {
        ...state,
        firstFormation: {
          ...state.firstFormation,
          move: "0px",
        },
        secondFormation: {
          ...state.secondFormation,
          move: "0px",
        },
        thirdFormation: {
          ...state.thirdFormation,
          move: "0px",
        },
      };
    }
    case "OPEN_FIRST_FORMATION": {
      return {
        ...state,
        firstFormation: {
          ...state.firstFormation,
          open: !state.firstFormation.open,
          height: state.firstFormation.open ? "0px" : "180px",
        },
        secondFormation: {
          ...state.secondFormation,
          open: false,
          height: "0px",
        },
        thirdFormation: {
          ...state.thirdFormation,
          open: false,
          height: "0px",
        },
      };
    }
    case "OPEN_SECOND_FORMATION": {
      return {
        ...state,
        firstFormation: {
          ...state.firstFormation,
          open: false,
          height: "0px",
        },
        secondFormation: {
          ...state.secondFormation,
          open: !state.secondFormation.open,
          height: state.secondFormation.open ? "0px" : "80px",
        },
        thirdFormation: {
          ...state.thirdFormation,
          open: false,
          height: "0px",
        },
      };
    }
    case "OPEN_THIRD_FORMATION": {
      return {
        ...state,
        firstFormation: {
          ...state.firstFormation,
          open: false,
          height: "0px",
        },
        secondFormation: {
          ...state.secondFormation,
          open: false,
          height: "0px",
        },
        thirdFormation: {
          ...state.thirdFormation,
          open: !state.thirdFormation.open,
          height: state.thirdFormation.open ? "0px" : "60px",
        },
      };
    }

    case "OPEN_FIRST_FORMATION_LANDSCAPE": {
      return {
        ...state,
        firstFormation: {
          ...state.firstFormation,
          open: !state.firstFormation.open,
          height: state.firstFormation.open ? "0px" : "80px",
        },
        secondFormation: {
          ...state.secondFormation,
          open: false,
          height: "0px",
        },
        thirdFormation: {
          ...state.thirdFormation,
          open: false,
          height: "0px",
        },
      };
    }
    case "OPEN_SECOND_FORMATION_LANDSCAPE": {
      return {
        ...state,
        firstFormation: {
          ...state.firstFormation,
          open: false,
          height: "0px",
        },
        secondFormation: {
          ...state.secondFormation,
          open: !state.secondFormation.open,
          height: state.secondFormation.open ? "0px" : "60px",
        },
        thirdFormation: {
          ...state.thirdFormation,
          open: false,
          height: "0px",
        },
      };
    }
    case "OPEN_THIRD_FORMATION_LANDSCAPE": {
      return {
        ...state,
        firstFormation: {
          ...state.firstFormation,
          open: false,
          height: "0px",
        },
        secondFormation: {
          ...state.secondFormation,
          open: false,
          height: "0px",
        },
        thirdFormation: {
          ...state.thirdFormation,
          open: !state.thirdFormation.open,
          height: state.thirdFormation.open ? "0px" : "50px",
        },
      };
    }

    case "CLOSE_FORMATIONS": {
      return {
        ...state,
        firstFormation: {
          ...state.firstFormation,
          open: false,
          height: "0px",
          move: "-30px",
        },
        secondFormation: {
          ...state.secondFormation,
          open: false,
          height: "0px",
          move: "30px",
        },
        thirdFormation: {
          ...state.thirdFormation,
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

export default formationsPageReducer;
