const create_new_order = require("../../../database/create_new_order");

const new_order = (msg, io) => {
  const saved = create_new_order(msg);
  if (saved) console.log("order was saved succesfully to database");
  else console.log("order couldnt be saved to database");

  return io.emit("new_order", msg);
};

module.exports = new_order;
