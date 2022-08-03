const accepted_order = (msg, socket) => {
  const { socketID, accepted } = msg;
  socket.to(socketID).emit("responseToOrder", { accepted });
};

module.exports = accepted_order;
