const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Query {
  getAllProducts: [Product!]!
  getProduct(id: ID!): Product!
}

type Mutation {
  createProduct(name: String!, category: String!, price: Float!): Product!
}

type Product {
  name: String!
  category: String!
  price: Float!
}
`;

module.exports = typeDefs