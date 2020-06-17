db = db.getSiblingDB("assignment");
db.messages.drop();
db.messages.insertMany([
  {
    message: "This isn't twitter!",
    username: "PatrickStar",
    timestamp: "December 17, 1995 03:24:00",
    id: 0,
  },
  {
    message: "I've been duped into using this website!",
    username: "SpongeBob",
    timestamp: "December 31, 1999 23:59:59",
    id: 1,
  },
  {
    message:
      "This is the best fake twitter app ever! I give it 5 stars and will tell all my friends!",
    username: "WeirdAl",
    timestamp: "July 07, 2002 12:15:56",
    id: 2,
  },
  {
    message: "Phew, my project deadline is near!",
    username: "SpongeBob",
    timestamp: "June 15, 2020 22:00:00",
    id: 3,
  },
]);
