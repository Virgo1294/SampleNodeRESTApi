const mongoose = require("mongoose")

const dbschema = new mongoose.Schema({
  key: String,
  value: String
  }, {
  collection: 'mydb'
})

module.exports = dbschema
