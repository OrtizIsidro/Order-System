const cors = require("cors");
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: "*" } });

///MIDDLEWARES
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
io.on("connection", (socket) => {
  console.log("a user is connected");
  socket.on("order", (msg) => {
    io.emit("order", msg);
  });
  socket.on("isOrderAccepted", (msg) => {
    const { socketID, message } = msg;
    socket.to(socketID).emit("responseToOrder", message);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
server.listen(3000, () => console.log("server running"));
