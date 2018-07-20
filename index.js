require('dotenv').config()
let express = require('express')
let bodyParser = require('body-parser')

let port = process.env.PORT || 3000

let index = require('./routes/index')

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', index)

app.listen(port, () => console.log('app rodando...'))