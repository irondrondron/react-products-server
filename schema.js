const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Query {
  getAllProducts: [Product!]!
  getProduct(_id: String!): Product!
  getAllOrders: [Order!]!
}

type Mutation {
  createProduct(name: String!, category: String!, price: Float!): Product!
  createOrder(productId: String!, name: String!, number: Float!): Order!
}

type Product {
  _id: String!
  name: String!
  category: String!
  price: Float!
}

type Order {
  _id: String!
  productId: String!
  name: String!
  number: Float!
}

`;

module.exports = typeDefs