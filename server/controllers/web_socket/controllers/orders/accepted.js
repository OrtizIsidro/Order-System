const accept_order = require("../../../database/accept_order");

const accepted_order = (msg, socket) => {
  const { socketID, accepted, _id } = msg;

  const saved = accept_order(_id, accepted);
  if (saved) console.log("succesfully modified");
  else console.log("error updating");

  return socket.to(socketID).emit("responseToOrder", { accepted });
};

module.exports = accepted_order;
