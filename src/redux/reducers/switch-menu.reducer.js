const INITIAL_STATE = {
  homeMenu: false,
  formationsMenu: false,
  backgroundMenu: false,
  skillsMenu: false,
  projectMenu: false,
};

const switchMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SWITCH_HOME_MENU": {
      return {
        ...state,
        homeMenu: true,
        formationsMenu: false,
        backgroundMenu: false,
        skillsMenu: false,
        projectsMenu: false,
      };
    }

    case "SWITCH_FORMATIONS_MENU": {
      return {
        ...state,
        homeMenu: false,
        formationsMenu: true,
        backgroundMenu: false,
        skillsMenu: false,
        projectsMenu: false,
      };
    }

    case "SWITCH_BACKGROUND_MENU": {
      return {
        ...state,
        homeMenu: false,
        formationsMenu: false,
        backgroundMenu: true,
        skillsMenu: false,
        projectsMenu: false,
      };
    }

    case "SWITCH_SKILLS_MENU": {
      return {
        ...state,
        homeMenu: false,
        formationsMenu: false,
        backgroundMenu: false,
        skillsMenu: true,
        projectsMenu: false,
      };
    }

    case "SWITCH_PROJECTS_MENU": {
      return {
        ...state,
        homeMenu: false,
        formationsMenu: false,
        backgroundMenu: false,
        skillsMenu: false,
        projectsMenu: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default switchMenuReducer;
