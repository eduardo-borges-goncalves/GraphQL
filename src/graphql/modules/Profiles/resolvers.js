const db = require("../../../db")

module.exports = {
  Query: {
    profiles: () => db.profiles
  }
}