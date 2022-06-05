const { join } = require('path')
const { loadFileSync, mergeTypeDefs, mergeResolvers } = require('graphql-tools')

const allTypes = loadFileSync(join(__dirname, "modules", "**", "*.gql"))
const allResolvers = loadFileSync(join(__dirname, "modules", "**", "resolvers.ts"))

const typeDefs = mergeTypeDefs(allTypes)
const resolvers = mergeResolvers(allResolvers)

console.log(typeDefs)
module.exports = {
  typeDefs, 
  resolvers
}