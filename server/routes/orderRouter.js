const Router = require('express')
const router = new Router()
const orderController = require('../controlles/orderController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', orderController.create)
router.get('/:id', orderController.getAll)
router.delete('/', orderController.deleteAll)
module.exports = router