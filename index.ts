const { gql, ApolloServer } = require("apollo-server")

type UserProps = {
  id: number, 
  age: number, 
  salary: number, 
  name: string,
  active: boolean, 
  house_phone: string
}

const users = [
  {
    id: 1,
    age: 19, 
    name: "Paulo", 
    salary: 2500,
    active: true, 
    house_phone: "62338695428"
  },
  {
    id: 2,
    age: 19, 
    name: "Pedro", 
    salary: 2500,
    active: true, 
    house_phone: "62338695428"
  },
  {
    id: 3,
    age: 19, 
    name: "Paulo", 
    salary: 2500,
    active: true, 
    house_phone: "62338695428"
  },
  {
    id: 4,
    age: 19, 
    name: "Paulo", 
    salary: 2500,
    active: true, 
    house_phone: "62338695428"
  },
  {
    id: 5,
    age: 19, 
    name: "Paulo", 
    salary: 2500,
    active: true, 
    house_phone: "62338695428"
  },
]

const profiles = [
  {
    id: 1, 
    description: "lorem ipsum lorem ipsum"
  },
  {
    id: 2, 
    description: "lorem ipsum lorem ipsum ipsum taneba"
  },
]

const typeDefs = gql`
  type Product {
    id: ID
    name: String
    value: Float
  }

  type User {
    age: Int
    salary: Float
    name: String
    active: Boolean
    id: ID
    phone: String
    profile: Profile
  }

  type Profile {
    id: ID
    description: String
  }

  type Query {
    users: [User]
    products: [Product]
    user(id: Int): User
    profiles: [Profile]
  }
`

const resolvers =  {
  User: {
    phone (obj: UserProps) {
      return obj.house_phone
    },
    profile (user: UserProps, arg: UserProps) {
      return profiles.find(profile => profile.id === user.id)
    }
  }, 
  Query: {
    user (_: UserProps, arg: UserProps) {
      return users.find(user => user.id === arg.id)
    }, 
    users () {
      return users
    }, 
    products () {
      const products = [
        {
          id: 1,
          name: "Secador de Cabelo",
          value: 189.00
        },
        {
          id: 2,
          name: "Wash Machine",
          value: 1899.00
        },
        {
          id: 3,
          name: "Cooktop",
          value: 289.00
        },
      ]
      return products  
    }, 
    profiles () {
      return profiles
    }
  }
}

const server = new ApolloServer({
  typeDefs, 
  resolvers
})

server.listen()



/*
 * Scalar Types
  * - Int
  * - Float
  * - String
  * - Boolean
  * - ID

*/

// Dúvidas: 

// O que é uma query? 
// O que é esse type antes de Query?
// O que é gql? Porque ele usa essas `` em volta do código igual typescript?
// Como essa aparente tipagem cai na Query dentro do resolvers?
// Qual a natureza dessa Query? É um objeto? porque as funções são chamadas 
// dentro dela como métodos como se fosse uma classe?


// O que é um Schema?

// Geralmente é a representação de um objeto. 
// SDL. Schema Definition Language

// Arguments

// Como eu posso fazer uma consulta no graphql, como eu posso retornar um usuário 
// Uma espécie de interceptador da query para corrigir uma propriedade passada errada, 
// ainda não vejo como isso pode se tornar automático mas imagino que será mostrado no 
// futuro. 
