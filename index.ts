import { QueryDocumentKeys } from "graphql/language/ast"

const { gql, ApolloServer } = require("apollo-server")

const resolvers=  {
  Query: {
    hello() {
      return "World"
    }
  }
}

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const server = new ApolloServer({
  typeDefs, 
  resolvers
})

server.listen()
