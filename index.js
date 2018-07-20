require('dotenv').config()
let express = require('express')

let port = process.env.PORT || 3000

let index = require('./routes/index')

let app = express()

app.use('/', index)

app.listen(port, () => console.log('app rodando...'))