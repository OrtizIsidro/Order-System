const order = require("../../models/order");

const all = async (req, res) => {
  const orders = await order.find();
  return res.json(orders);
};
const awaiting = async (req, res) => {
  const awaiting_orders = order.find({ state: "awaiting" });
  return res.json(awaiting_orders);
};
module.exports = { all, awaiting };
