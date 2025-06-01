const ApiError = require('../error/ApiError')
const {BasketProduct, Basket, Product} = require('../moduls/moduls')



class basketController {
async create(req, res, next) {
    try {
    const {basketId, productId, count = 1} = req.body
    const [basket, product] = await Promise.all([
        Basket.findByPk(basketId),
        Product.findByPk(productId)
    ]);
    
    if (!basket || !product) {
        return next(ApiError.badRequest('Корзина или товар не найдены'));
    }
    let basketProduct = await BasketProduct.findOne({
            where: { basketId, productId }
        });
    if (basketProduct) 
        {
            basketProduct.count += count
            await basketProduct.save()
        } 
    else 
        {   
            basketProduct = await BasketProduct.create({basketId: basketId, productId: productId,count: count})
        }
     
        return res.json(basketProduct)
    } catch(e) {
        next(ApiError.badRequest(e.message))

    }
}

async getAll(req,res,next) {
    try{
        const {basketId} = req.params

        if (!basketId) {
            return next(ApiError.badRequest('Не указан ID корзины'));
        }

        const basket = await Basket.findByPk(basketId);
        if (!basket) {
            return next(ApiError.notFound('Корзина не найдена'));
        }

        const basketProduct = await BasketProduct.findAll({
            where:{basketId},
            include:[{
                model:Product,
                attributes: ['name','cost','img','desc']
            }]
        })

        return res.json(basketProduct)
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
}


async deleteAll(req,res,next) {
    try {
    const basketId = req.body
    BasketProduct.destroy({where:basketId})
    return res.json({message: "ok"})
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
}

}

module.exports = new basketController()