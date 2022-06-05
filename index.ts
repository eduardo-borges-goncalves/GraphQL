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

// Fragment and Aliases

  // Não tenho certeza, mas imagino que Aliases seja nomear as querys. 
  // Inicialmente, não estavámos nomeando as queries. Assim, dizíamos só user() {......}
  // Porém, é considerado boa prática nomear nossas queries. Fica assim: 
  // query {
  //   firstUser: user(id: 1) {
  //     id
  //     phone
  //     name
  //     age
  //     salary   
  //   }
  // }
          
  // Fragments são usados para fazer consultas. Eles servem para envelopar os valores 
  // que queremos retornar numa consulta. 
  // - fragment completeUser on User {
  //     id
  //     phone
  //     name
  //     age
  //     salary
  //   }
  // A escrita é mais ou menos essa ai. 
  // Depois, você substitui na query: 

  // query {
  //   firstUser: user(id: 1) {
  //     ...completeUser
  //   }
  // }
  
// Operation Name and Enums

  // Além das chamadas dentro da query receber nomes, a query também recebe. 
  // query pedidoDeVenda {.......}

  // Enums eu ainda não entendi, mas tem a ver com tipagem. 

// Directives and Variables 

  // É boa prática realizar a query envelopando o valor passado como argumento em uma variável. 
  // Para isso, abra a janelinha de Variables ali no playground do Apollo e crie uma variável. ]
  // A partir disso as coisas começam a se complicar. 
  // query userSearch($id: Int) {
  //   user(id: $id) {
  //     active 
  //     age
  //     id
  //     name
  //     phone
  //     profile {
  //       id description
  //     }
  //   }
  // }
  // $id passado como parâmetro em userSearch() é a nossa variable. O graphQl pede esse cifrão. 

  // We declare in Variables as a JSON file: 
  // {
  //   "id": 1
  // }
  // Simple, but is different. 

  // The directives remember Angular so much. Its some reserved words that do some magic. 
  // The first one, make possible block some search result
  // query userSearch($id: Int, $showPerfil: Boolean!) {
  //   user(id: $id) {
  //     active 
  //     age
  //     id
  //     name
  //     phone
  //     profile @include(if: $showPerfil) {
  //       id description
  //     }
  //   }, 
  // }
  // We use the @include(if: ....) to do this. 
  // Look, we created a variable and passed it as a argument, $showPerfil. Only if it's true, 
  // the data profile will be returned. 
  // The second, agree us skip or jump some content, wich cause maybe the same result than @include. 
  // - phone @skip(if: $jump)
  






































