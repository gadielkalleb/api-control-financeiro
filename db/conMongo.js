require('dotenv').config()
let mongoose = require('mongoose')

mongoose.connect(process.env.APP_DB_URL_LOCAL, { useNewUrlParser: true })
mongoose.Promise = global.Promise

module.exports = mongoose