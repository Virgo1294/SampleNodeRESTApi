const mongoose = require("mongoose")
const mongodb = "mongodb://localhost:27017/myDB"
mongoose.connect(mongodb, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error'))
module.exports = db
