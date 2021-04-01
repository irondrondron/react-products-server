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

const Product = mongoose.model('Location', ProductSchema)

module.exports = {
  Product
}