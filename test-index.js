"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql, ApolloServer } = require("apollo-server");
const resolvers = {
    Query: {
        hello() {
            return "World";
        }
    }
};
const typeDefs = gql `
  type Query {
    hello: String
  }
`;
const server = new ApolloServer({
    typeDefs,
    resolvers
});
server.listen();
/*
  import express from "express"

  const app = express()
  const PORT = 5000;

  app.get("/", (req, res) => {
    res.send("Welcome to typescript backend!")
  })

  app.listen(PORT, () => console.log("The application is listening on port ", PORT))
*/ 
