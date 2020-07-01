// Initial Chatter State
const initialMessageState = {
  messages: [
    {
      message: "This isn't twitter!",
      username: "PatrickStar",
      avatar: "https://i.imgur.com/18KrOIv.jpg",
      timestamp: new Date("June 17, 2020 06:24:00"),
      hearts: 5,
      heartsGivenBy: [],
      id: 0,
    },
    {
      message: "I've been duped into using this website!",
      username: "SpongeBob",
      avatar: "https://i.imgur.com/KZObNVn.jpg",
      timestamp: new Date("May 28, 2020 23:01:59"),
      hearts: 22,
      heartsGivenBy: [],
      id: 1,
    },
    {
      message:
        "This is the best fake twitter app ever! I give it 5 stars and will tell all my friends!",
      username: "WeirdAl",
      avatar: "https://i.imgur.com/wAy6yQt.jpg",
      timestamp: new Date("January 07, 2020 12:15:56"),
      hearts: 999,
      heartsGivenBy: [],
      id: 2,
    },
    {
      message: "Oh no, my test is tomorrow!",
      username: "SpongeBob",
      avatar: "https://i.imgur.com/KZObNVn.jpg",
      timestamp: new Date("February 20, 2003 22:00:00"),
      hearts: 1357,
      heartsGivenBy: [],
      id: 3,
    },
  ],
};

const HEART_LIMIT = 9999;

// remove donor from heartsGivenBy for message
const removeHeartDonor = (message, donor) => {
  const index = message.heartsGivenBy.indexOf(donor);
  if (index > -1) {
    message.heartsGivenBy.splice(index, 1);
  }
};

// heart handler helper
const doHeart = (msg, action, newMessages) => {
  msg.hearts += Number(action.payload.value);
  if (action.payload.value === 1) {
    msg.heartsGivenBy.push(action.payload.donor);
  } else {
    removeHeartDonor(msg, action.payload.donor);
  }
  return { messages: newMessages };
};

// heart handler
const handleAddHeart = (state, action) => {
  const newMessages = [...state.messages];
  for (const msg of newMessages) {
    if (msg.id === action.payload.id) {
      if (msg.hearts < HEART_LIMIT) {
        return doHeart(msg, action, newMessages);
      }
      return state;
    }
  }
  return state; // no match found ---> error state
};

// Updates the message state to display on the Chatter Feed
const messageReducer = (state = initialMessageState, action) => {
  switch (action.type) {
    case "ADD_HEART": {
      return handleAddHeart(state, action);
    }
    case "ADD_MESSAGE": {
      // spread operator to copy msgs to new array, then push new msg
      const newState = [action.message, ...state.messages];
      return { messages: newState };
    }
    case "DELETE_MESSAGE": {
      const filteredMessages = state.messages.filter((message) => {
        // evaluates to false if id matches then doesn't add it to array
        return message.id !== action.id;
      });
      return { messages: filteredMessages };
    }
    default:
      return state;
  }
};

export default messageReducer;
