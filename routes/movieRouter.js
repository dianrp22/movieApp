const router = require('express').Router()
const Controller = require('../controllers/controller')

router.get('/',Controller.findAllMovie)
router.get('/add',Controller.getAdd)
router.post('/add',Controller.postAdd)
router.get('/delete/:id',Controller.remove)
router.get('/edit/:id',Controller.getEdit)
router.post('/edit/:id',Controller.postEdit)
router.get('/addCast/:id',Controller.getAddMoviesCast)
router.post('/addCast/:id',Controller.postAddMoviesCast)

module.exports = router