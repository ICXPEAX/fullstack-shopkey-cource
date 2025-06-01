const Router = require('express')
const router = new Router()
const supplierController = require('../controlles/supllierController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', supplierController.create)
router.get('/', supplierController.getAll)
router.delete('/', supplierController.deleteAll)
module.exports = router