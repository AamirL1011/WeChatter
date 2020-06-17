import { combineReducers } from "redux";

const userStates = {
  users: [
    { username: "PatrickStar", msgIds: [0] },
    { username: "SpongeBob", msgIds: [1, 3] },
    { username: "WeirdAl", msgIds: [2] },
  ],
};

const userReducer = (state = userStates, action) => {
  if (action.type === "ADD_MESSAGE") {
    const newState = [...state.users];
    let userExists = false;
    for (const user of newState) {
      if (user.username === action.message.username) {
        userExists = true;
        user.msgIds.push(action.message.id);
      }
    }
    if (userExists === false) {
      const newUser = {
        username: action.message.username,
        msgIds: [].push(action.message.id),
      };
      newState.push(newUser);
    }
    return { users: newState };
  }
  if (action.type === "DELETE_MESSAGE") {
    const newState = [...state.users];
    for (const user of newState) {
      if (user.msgIds.includes(action.id)) {
        const index = user.msgIds.indexOf(action.id);
        if (index > -1) {
          user.msgIds.splice(index, 1);
        }
      }
    }
    return { users: newState };
  }
  return state;
};

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

const initialMessageState = {
  messages: [
    {
      message: "This isn't twitter!",
      username: "PatrickStar",
      timestamp: new Date("December 17, 1995 03:24:00"),
      id: 0,
    },
    {
      message: "I've been duped into using this website!",
      username: "SpongeBob",
      timestamp: new Date("December 31, 1999 23:59:59"),
      id: 1,
    },
    {
      message:
        "This is the best fake twitter app ever! I give it 5 stars and will tell all my friends!",
      username: "WeirdAl",
      timestamp: new Date("July 07, 2002 12:15:56"),
      id: 2,
    },
    {
      message: "Oh no, my test is tomorrow!",
      username: "SpongeBob",
      timestamp: new Date("June 15, 2020 22:00:00"),
      id: 3,
    },
  ],
};

const messageReducer = (state = initialMessageState, action) => {
  if (action.type === "ADD_MESSAGE") {
    const newState = [...state.messages, action.message];
    return { messages: newState };
  }
  if (action.type === "DELETE_MESSAGE") {
    const filteredMessages = state.messages.filter((message) => {
      // evaluates to false if id matches then doesn't add it to array
      return message.id !== action.id;
    });
    return { messages: filteredMessages };
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
