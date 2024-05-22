const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { typeDefs, resolvers } = require("./schema.js");
const { PORT } = require("./settings.js");

const app = express();

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startApolloServer().catch(err => {
  console.error("Error starting Apollo Server:", err);
});

