import { combineReducers } from "redux";
import modificatorsReducer from "./modificators-reducers";
import homePageReducer from "./home-page-reducers";
import themesReducer from "./themes-reducers";
import switchMenuReducer from "./switch-menu.reducer";
import formationsPageReducer from "./formations-page-reducers";
import backgroundPageReducer from "./background-page-reducers";
import sizeReducer from "./size.reducer";

const finalReducer = combineReducers({
  modificatorsReducer,
  homePageReducer,
  themesReducer,
  switchMenuReducer,
  formationsPageReducer,
  backgroundPageReducer,
  sizeReducer,
});

export default finalReducer;
