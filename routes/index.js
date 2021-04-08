const router = require('express').Router()
const produceRouter = require('./produceRouter')
const movieRouter = require('./movieRouter')
const castRouter = require('./castRouter')

router.use('/',produceRouter)
router.use('/movies',movieRouter)
router.use('/casts',castRouter)


module.exports = router 