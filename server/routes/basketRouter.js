const Router = require('express')
const router = new Router()
const basketController = require('../controlles/basketController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', basketController.create)
router.get('/:basketId', basketController.getAll)
router.delete('/', basketController.deleteAll)
module.exports = router