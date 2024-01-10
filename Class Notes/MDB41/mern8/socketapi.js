const io = require("socket.io")();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on("connection", function (socket) {
    console.log("A user connected");
    socket.on('connectToRoom', roomName => {
        socket.join(roomName)
        io.to(roomName).emit('max', "a user enter in the room")
    })

});
// end of socket.io logic

module.exports = socketapi;