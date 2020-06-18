import { combineReducers } from "redux";
import userReducer from "./userReducers";
import messageReducer from "./messageReducers";



// Message Details
const popupToggle = {
  popPresent: false,
  popID: null,
};

const toggleReducer = (state = popupToggle, action) => {
  if (action.type === "TOGGLE_POPUP") {
    return { popPresent: !state.popPresent, popID: action.id };
  }
  return state;
};

// Page State
const pageState = {
  isHome: "true",
};

const pageReducer = (state = pageState, action) => {
  if (action.type === "HOME_PAGE_SELECTED") {
    return { isHome: "true" };
  }
  if (action.type === "ABOUT_PAGE_SELECTED") {
    return { isHome: "false" };
  }
  return state;
};


export default combineReducers({
  messages: messageReducer,
  isHome: pageReducer,
  popupToggle: toggleReducer,
  users: userReducer,
  // anotherKey: anotherReducer //all your reducers should be combined
});
