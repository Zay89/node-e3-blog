const router = require('express').Router()
const userServices = require('../users/users.http')

const authServices = require('./auth.http')

router.post('/login', authServices.login)
router.post('/register', userServices.register)

exports.router = router    