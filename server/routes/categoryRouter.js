const Router = require('express')
const router = new Router()
const categoryController = require('../controlles/categoryController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', categoryController.create)
router.get('/', categoryController.getAll)
router.delete('/', categoryController.deleteAll)
module.exports = router