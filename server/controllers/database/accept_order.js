const order = require("../../models/order");

const accept_order = async (_id, new_state) => {
  const saved = await order.findOneAndUpdate(
    { _id },
    { state: { accepted: new_state } }
  );
  if (saved) return true;
  return false;
};
module.exports = accept_order;
