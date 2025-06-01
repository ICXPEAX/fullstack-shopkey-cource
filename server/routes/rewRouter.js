const Router = require('express')
const router = new Router()
const rewController = require('../controlles/rewController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', rewController.create)
router.get('/', rewController.getAll)
router.delete('/', rewController.deleteAll)
module.exports = router