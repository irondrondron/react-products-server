const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { createServer } = require('http')
const mongoose = require('mongoose')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')


const startServer = async () => {
  const app = express();
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
      endpoint: 'http://localhost:4000/graphql',
    }
  });

  server.applyMiddleware({ app });

  const httpServer = createServer(app)
  server.installSubscriptionHandlers(httpServer)

  await mongoose
    .connect('mongodb+srv://dbUser:dbUserPassword@cluster0.i2tt7.mongodb.net/remotedb?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => {
      httpServer.listen(4000, () => {
        console.log('MongoDB connected successfully. Server ready at http://localhost:4000/graphql')
      })
    })
    .catch((err) => {
      console.error('Error while connecting to MongoDB', err);
    })
}

startServer()