// action for making a new ChitChat
export const addMsg = (msg) => {
  return {
    type: "ADD_MESSAGE",
    message: msg,
  };
};

// action for ChitChat deletion
export const delMsg = (id) => {
  return {
    type: "DELETE_MESSAGE",
    id,
  };
};

// action for changing the page view
export const changePageState = (val) => {
  if (val) {
    return {
      type: "HOME_PAGE_SELECTED",
    };
  }
  return {
    type: "ABOUT_PAGE_SELECTED",
  };
};

// action for toggling ChitChat details popup
export const togglePopup = (val) => {
  return {
    type: "TOGGLE_POPUP",
    id: val,
  };
};
