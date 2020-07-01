// action for adding hearts to a ChitChat
export const addHeart = (payload) => {
  return {
    type: "ADD_HEART",
    payload,
  };
};
