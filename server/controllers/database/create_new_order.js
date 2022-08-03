const getDate = require("../../helpers/getDate");
const order = require("../../models/order");

const create_new_order = async (msg) => {
  const refactored_order = {
    order: msg,
    date: getDate(),
  };
  const new_order = new order(refactored_order);
  const save = await new_order.save();
  if (save) return true;
  return false;
};

module.exports = create_new_order;
