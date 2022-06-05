const db = require("../../../db")

module.exports = {
  Query: {
    products: () => db.products
  }
}