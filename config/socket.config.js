// const Server = require("socket.io");
// const http = require("http");
// const express = require("express");

// const app = express();

// const server = http.createServer(app);

// const io = Server(server, {
//     cors: {
//         origin: ["http://localhost:3000"],
//         methods: ["GET", "POST"],
//     },
// });

// io.on("connection", (socket) => {
//     console.log("a user connected");

//     socket.on("disconnect", () => {
//         console.log("user disconnected");
//     });
// });

// module.exports = { io, app, server };
