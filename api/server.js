const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        Methods: ["GET", "POST"]
    }
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Server is running.");
});

io.on("connection", (socket) => {
    socket.emit("me", socket.id);

    socket.on('disconnect', () => {
        socket.broadcast.emit("callended");
    });

    socket.on("calluser", ({userToCall, signalData, from, name}) => {
        io.to(userToCall).emit("calluser", {signal: signalData, from, name});
    });

    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal);
    });

    //========================================-----ROOMS----==========================================
    socket.emit("local", socket.id);

    socket.on("joinmeeting", ({meetingToJoin, signalData, from, name}) => {
        io.to(meetingToJoin).emit("joinmeeting", {signal: signalData, from, name});
    });

    socket.on("allowentry", (data) => {
        io.to(data.to).emit("entryaccepted", data.signal);
    });

    socket.on('meetingended', (meetingID) => {
        socket.broadcast.emit("meetingended", meetingID);
    });

});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
