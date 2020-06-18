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
      let newArr = [];
      newArr.push(action.message.id);
      let newUsrName = action.message.username;
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
      console.log("userReducer delete:", user);
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