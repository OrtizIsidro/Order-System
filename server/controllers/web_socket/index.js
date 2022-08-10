const new_order = require("./controllers/orders/new");
const accepted_order = require("./controllers/orders/accepted");
const disconnect = require("./controllers/disconnect");
const order_on_the_way = require("./controllers/orders/on_the_way");

const web_socket_handler = (socket, io) => {
  //CONNECTION
  console.log("a user has connected");

  //ORDERS
  socket.on("order", (msg) => new_order(msg, io));
  socket.on("isOrderAccepted", (msg) => accepted_order(msg, socket));
  socket.on("orderOnTheWay", (msg) => order_on_the_way(msg, socket));

  //DISCONNECTION
  socket.on("disconnect", disconnect);
};

module.exports = { web_socket_handler };
