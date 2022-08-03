const router = require("express").Router();
const Order = require("../../models/order");

router.get("/all", async (req, res) => {
  const orders = await Order.find();
  return res.json(orders);
});
module.exports = router;
