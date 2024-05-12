const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  item_name: { type: String, required: [true,"Please Enter Item Name"] },
  qty: { type: Number, required: [true,"Please Enter Qty"]  },
  price: { type: String, required: [true,"Please Enter Shoe Price"]  },
  size: { type: String, required: [true,"Please Enter Shoe Size"], enum: ['40', '41', '42', '43', '44'], default: '40' },
  brand: { type: String, required: [true,"Please Enter Item Brand"], enum: ['Nike', 'Addidas', 'Puma', 'New Balance', 'Tommy'], default: 'Nike' },
  image: { type: String , required: [true,"Please Upload Image"] },
  enabled: {type: Boolean, default: true},
  created_at: {type: Date, default: Date.now}
});

itemSchema.pre('save', function(next) {
  if (!this.price.startsWith('AUD ')) {
      this.price = `AUD ${this.price}`;
  }
  next();
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
