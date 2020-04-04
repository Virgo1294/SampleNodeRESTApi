const mongoose = require("mongoose")
const mongodb = "mongodb+srv://spandu:8Xf8OAKznHVez7cz@cluster0-nv1ms.mongodb.net/mydb?retryWrites=true&w=majority"
mongoose.connect(mongodb, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error'))
module.exports = db
