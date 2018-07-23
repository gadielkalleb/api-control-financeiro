let express = require('express')

let router = express.Router()

router.get('/auth', (req, res) => {
    res.status(200).send('auth')
})

module.exports = router