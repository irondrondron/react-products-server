const { Product } = require('./models')

const resolvers = {
  Query: {
    getAllProducts: () => Product.find(),
  },
  Mutation: {
    createProduct: async (_, { name, category, price }) => {
      const productObj = new Product({ name, category, price })
      await productObj.save()
      return productObj
    }
  }
}

module.exports = resolvers