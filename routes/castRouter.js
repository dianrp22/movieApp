const router = require('express').Router()
const Controller = require('../controllers/controller')

router.get('/',Controller.getCast)
router.get('/add',Controller.addCast)
router.post('/add',Controller.postCast)
router.get('/delete/:id',Controller.removeCast)
router.get('/edit/:id',Controller.getEditCast)
router.post('/edit/:id',Controller.postEditCast)
router.get('/listmovies/:id',Controller.listMovie)
module.exports = router