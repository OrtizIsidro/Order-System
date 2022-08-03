const mongoose = require("mongoose");
const schema = mongoose.Schema;
const orderSchema = new schema({
  date: String,
  order: Object,
});
module.exports = mongoose.model("order", orderSchema);
