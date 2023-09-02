const express = require('express')
const getalltests = require('../Controllers/test.controller')

const router = express.Router()

router.get('/getalltests',getalltests)


module.exports = router