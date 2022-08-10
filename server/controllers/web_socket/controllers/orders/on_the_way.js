const order_on_the_way = (content, socket) => {
  const { socketID, msg } = content;
  console.log({ socketID, msg });
  return socket.to(socketID).emit("OrderReady", { msg });
};
module.exports = order_on_the_way;
