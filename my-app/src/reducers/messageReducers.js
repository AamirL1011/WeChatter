const initialMessageState = {
  messages: [
    {
      message: "This isn't twitter!",
      username: "PatrickStar",
      avatar: "https://i.imgur.com/18KrOIv.jpg",
      timestamp: new Date("June 17, 2020 06:24:00"),
      id: 0,
    },
    {
      message: "I've been duped into using this website!",
      username: "SpongeBob",
      avatar: "https://i.imgur.com/KZObNVn.jpg",
      timestamp: new Date("May 28, 2020 23:01:59"),
      id: 1,
    },
    {
      message:
        "This is the best fake twitter app ever! I give it 5 stars and will tell all my friends!",
      username: "WeirdAl",
      avatar: "https://i.imgur.com/wAy6yQt.jpg",
      timestamp: new Date("January 07, 2020 12:15:56"),
      id: 2,
    },
    {
      message: "Oh no, my test is tomorrow!",
      username: "SpongeBob",
      avatar: "https://i.imgur.com/KZObNVn.jpg",
      timestamp: new Date("February 20, 2003 22:00:00"),
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

export default messageReducer;