const { Product, Order } = require('./models')

const resolvers = {
  Query: {
    getAllProducts: () => Product.find(),
    getProduct: (_id) => Product.findOne(_id),
    getAllOrders: () => Order.find()
  },
  Mutation: {
    createProduct: async (_, { name, category, price }) => {
      const productObj = new Product({ name, category, price })
      await productObj.save()
      return productObj
    },
    createOrder: async (_, { productId, name, number }) => {
      const orderObj = new Order({ productId, name, number })
      await orderObj.save()
      return orderObj
    }
  }
}

module.exports = resolvers