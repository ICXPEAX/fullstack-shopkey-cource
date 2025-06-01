const ApiError = require('../error/ApiError')
const {BasketProduct,Product,Order} = require('../moduls/moduls')


class orderController {
    async create(req, res, next) {
    try {
    const {basketProductId, status} = req.body
    const basket = await BasketProduct.findByPk(basketProductId)
    
    if (!basket) {
        return next(ApiError.badRequest('Корзина или товар не найдены'));
    }
    const order = await Order.create({basketProductId: basketProductId, status: status})
      
     
        return res.json(order)
    } catch(e) {
        next(ApiError.badRequest(e.message))

    }
}

async getAll(req,res,next) {
    try{
        const {id} = req.params

        if (!id) {
            return next(ApiError.badRequest('Не указан ID корзины'));
        }

       

        const order = await Order.findAll({
            where:{id},
            include:[{
                model: BasketProduct,
                include: [{
                    model: Product,
                    attributes: ['name', 'cost', 'img', 'desc']
                }]
            }]
        })
        if (!order) {
            return next(ApiError.notFound('Корзина не найдена'));
        }
        return res.json(order)
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
}


async deleteAll(req,res,next) {
    try {
    const id = req.body
    Order.destroy({where:id})
    return res.json({message: "ok"})
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
}

}
    module.exports = new orderController()