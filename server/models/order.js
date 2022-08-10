const mongoose = require("mongoose");
const schema = mongoose.Schema;
const orderSchema = new schema({
  date: String,
  order: Object,
  state: {
    accepted: { type: String, default: "awaiting" },
  },
});
module.exports = mongoose.model("order", orderSchema);
