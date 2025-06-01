const Router = require('express')
const router = new Router()

const basketRouter = require('./basketRouter')
const orderRouter = require('./orderRouter')
const productRouter = require('./productRouter')
const rewRouter = require('./rewRouter')
const supplierRouter = require('./supplierRouter')
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/basket', basketRouter)
router.use('/order', orderRouter)
router.use('/rew', rewRouter)
router.use('/supplier', supplierRouter)
router.use('/category', categoryRouter)

/*


*/


module.exports = router