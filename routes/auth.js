let express = require('express')

let router = express.Router()

let { auth } = require('../controllers/auth')

router.get('/auth', auth)

module.exports = router