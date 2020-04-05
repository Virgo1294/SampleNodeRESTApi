const express = require("express")
const app = express()
const routes = require("./routes/routes.js")
const morgan = require('morgan')


app.use('/', routes)
app.use(morgan('dev'))

app.listen(5000, () => {
  console.log('Hello Span! The server is running on http://localhost:5000')
})
