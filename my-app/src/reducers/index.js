import { combineReducers } from "redux";
import userReducer from "./userReducers";
import messageReducer from "./messageReducers";
import userStateReducer from "./userStateReducer";

// Message Details Popup {likely to be deprecated in the near future}
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

export default combineReducers({
  messages: messageReducer,
  popupToggle: toggleReducer,
  users: userReducer,
  userState: userStateReducer,
  // anotherKey: anotherReducer //all your reducers should be combined
});
