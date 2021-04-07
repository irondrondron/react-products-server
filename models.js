const mongoose = require('mongoose')
const { Schema } = mongoose

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, { collection: 'products' })

const OrderSchema = new Schema({
  productId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  }
}, { collection: 'orders' })

const Product = mongoose.model('Product', ProductSchema)
const Order = mongoose.model('Order', OrderSchema)


module.exports = {
  Product,
  Order
}