const express = require('express')
const { bookTest, userbookings } = require('../Controllers/order.controller')
const {registerUser,loginUser} = require('../Controllers/user.controller')

const router = express.Router()

router.post('/login', loginUser)
router.post('/signup', registerUser)
router.post('/bookTest', bookTest)
router.get('/my-bookings',userbookings)

module.exports = router