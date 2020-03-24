const mongoose = require("mongoose")

const dbschema = new mongoose.Schema({
  key: String,
  value: String
  }, {
  collection: 'myDB'
})

module.exports = dbschema
