const cors = require("cors");
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const mongoose = require("mongoose");
const { Server } = require("socket.io");
const { DATA_BASE_URL } = require("./lib/database");
const { web_socket_handler } = require("./controllers/web_socket");
const io = new Server(server, { cors: { origin: "*" } });
const api = require("./api/index");

//DATABASE CONNECTION
mongoose.connect(DATA_BASE_URL);
const db = mongoose.connection;
db.on("open", () => console.log("data base connected"));
db.on("error", () => console.log("error connecting to data base"));

///MIDDLEWARES
app.use(cors());
app.use(express.json());

//ROUTES
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//API
app.use("/api", api);

// WEB SOCKET CONNECTION
io.on("connection", (socket) => web_socket_handler(socket, io));

server.listen(3000, () => console.log("server running"));
