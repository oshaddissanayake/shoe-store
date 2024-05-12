const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  item_code: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
  },
  available_stock: {
    type: Number,
    required: [true, "Please Enter Available Stocks"],
  },
  reservation: {
    type: Number,
  },
  Availability: {
    type: Boolean,
    default: false,
  },
  last_update: {
    type: Date,
    default: Date.now,
  },
});
const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
