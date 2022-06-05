import { UserProps } from "../../../types/UserProps"
const db = require("../../../db")

module.exports = {
  User: {
    profile (user) {
      return db.profiles.find((profile) => profile.id === user.id)
    }, 
    phone: (obj) => obj.house_phone,
  }, 
  Query: {
    user(obj, args) {
      return db.users.find((user )=> user.id === args.id)
    }, 
    users: () => db.users
  }
}