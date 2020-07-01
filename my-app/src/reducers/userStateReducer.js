export const currentUserState = {
  currentUserID: "patrickstar@gmail.com",
};

const userStateReducer = (state = currentUserState, action) => {
  if (action.type === "GET_USER") {
    return state;
  }
  return state;
};

export default userStateReducer;
