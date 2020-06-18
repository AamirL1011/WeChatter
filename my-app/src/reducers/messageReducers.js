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

export default messageReducer;