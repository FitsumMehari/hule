const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: Array
    },
    price: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('product', ProductSchema);