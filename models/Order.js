const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  products: [
    {
      productId: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  amount: {
    type: Number,
    required: true
  },
  address: {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    city: {
      type: String
    },
    houseNum: {
      type: String
    },
    areaName: {
      type: String
    },
    phoneNum: {
      type: Number
    },
    specialNote: {
      type: String
    }
  },
  status: {
    type: String,
    default: 'Pending'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('order', OrderSchema);
