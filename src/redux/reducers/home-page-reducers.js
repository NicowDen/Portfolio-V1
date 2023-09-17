const INITIAL_STATE = {
  pageOpen: false,
  welcomeMessageInPosition: false,
  presentationPopCounter: 0,
  presentationArray: [],
  presentationDecorationOpacity: 0,
  logosPopCounter: 0,
  logosArray: [],
  mainBoxShadowOpacity: 0,
};

const homePageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "HOME_PAGE_OPEN_STATE": {
      return { ...state, pageOpen: true };
    }

    case "HOME_PAGE_WELCOME_MESSAGE_IN_POSITION": {
      return { ...state, welcomeMessageInPosition: true };
    }

    case "HOME_PAGE_INCREASE_PRESENTATION_COUNTER": {
      return {
        ...state,
        presentationPopCounter: state.presentationPopCounter + 1,
      };
    }

    case "HOME_PAGE_INCREASE_PRESENTATION_DECORATION_OPACITY": {
      return {
        ...state,
        presentationDecorationOpacity: state.presentationDecorationOpacity + 1,
      };
    }

    case "HOME_PAGE_INCREASE_PRESENTATION_ARRAY": {
      return {
        ...state,
        presentationArray: [
          ...state.presentationArray,
          action.payload.array[action.payload.counter],
        ],
      };
    }
    case "HOME_PAGE_INCREASE_LOGOS_ARRAY": {
      return {
        ...state,
        logosArray: [
          ...state.logosArray,
          action.payload.array[action.payload.counter],
        ],
      };
    }

    case "HOME_PAGE_INCREASE_LOGOS_COUNTER": {
      return {
        ...state,
        logosPopCounter: state.logosPopCounter + 1,
      };
    }

    case "HOME_PAGE_MAIN_BOXSHADOW_COUNTER": {
      return {
        ...state,
        mainBoxShadowOpacity: state.mainBoxShadowOpacity + 0.1,
      };
    }

    default: {
      return state;
    }
  }
};

export default homePageReducer;
