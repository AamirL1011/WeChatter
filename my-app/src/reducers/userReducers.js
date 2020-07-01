const userStates = {
  users: [
    { username: "PatrickStar", msgIds: [0] },
    { username: "SpongeBob", msgIds: [1, 3] },
    { username: "WeirdAl", msgIds: [2] },
  ],
};

// Updates user message profile, msgIds are added to the user when a new ChitChat is made
const userReducer = (state = userStates, action) => {
  if (action.type === "ADD_MESSAGE") {
    const newState = [...state.users];
    let userExists = false;
    // search for the username from the new ChitChat in the user state
    // if it exists, set userExists to true, and we can simply push the new msgID to the user
    for (const user of newState) {
      if (user.username === action.message.username) {
        userExists = true;
        user.msgIds.push(action.message.id);
      }
    }
    // handle case where we have a new user
    // creates new user --> username and msgId object
    if (userExists === false) {
      const newArr = [];
      newArr.push(action.message.id);
      const newUsrName = action.message.username;
      const newUser = {
        username: newUsrName,
        msgIds: newArr,
      };
      newState.push(newUser);
    }
    return { users: newState };
  }
  if (action.type === "DELETE_MESSAGE") {
    const newState = [...state.users];
    for (const user of newState) {
      // if the we can find the msg ID we need to delete in a user's state
      // then get the index in the array of that id and delete it from the
      // msgID array
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

export default userReducer;
