let express = require('express')

let router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send({ msg: 'ok' })
})

module.exports = router