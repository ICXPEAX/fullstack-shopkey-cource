const Router = require('express')
const router = new Router()
const productController = require('../controlles/productController')
const cheakRole = require('../middleware/checkRoleMiddleware')

router.post('/',productController.create)
router.get('/',productController.getAll)
router.get('/:id',productController.getOne)
router.delete('/',cheakRole('ADMIN'),productController.delete)

module.exports = router