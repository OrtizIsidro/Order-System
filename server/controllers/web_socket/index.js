const new_order = require("./controllers/orders/new");
const accepted_order = require("./controllers/orders/accepted");
const disconnect = require("./controllers/disconnect");

const web_socket_handler = (socket, io) => {
  //CONNECTION
  console.log("a user has connected");

  //ORDERS
  socket.on("order", (msg) => new_order(msg, io));
  socket.on("isOrderAccepted", (msg) => accepted_order(msg, socket));

  //DISCONNECTION
  socket.on("disconnect", disconnect);
};

module.exports = { web_socket_handler };
