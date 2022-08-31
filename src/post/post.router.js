const router = require('express').Router()
const passport = require('passport');
require('../middlewares/auth.middleware')(passport)

const postServices = require('./post.http')

router.route('/')
    .post(passport.authenticate('jwt', {session: false}), postServices.create)
    .get(postServices.getAll)

router.route('/:id')
    .get(postServices.getById)

exports.router = router