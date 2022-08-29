const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  ItemName: {
    type: String
  },
  ItemPrice: {
    type: Number
  },
  ItemImage: {
    type: String
  },
  ItemCatagories: {
    type: String
  },
  isYoungBlood: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('product', ProductSchema);
