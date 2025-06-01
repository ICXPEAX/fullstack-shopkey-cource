const ApiError = require('../error/ApiError')
const {User,Review,Product} = require('../moduls/moduls')

class rewController {
    async create(req, res, next) {
    try {
    const {userId,productId,review} = req.body
    const user = await User.findByPk(userId)
    const product = await Product.findByPk(productId)
    
    if (!user) {
        return next(ApiError.badRequest('User not found'));
    }
    if (!product) {
        return next(ApiError.badRequest('Product not found'));
    }
    if (!review) {
        return next(ApiError.badRequest('Review not wrote'));
    }
    const reviews = await Review.create({userId: userId, productId: productId, rew: review})
      
     
        return res.json(reviews)
    } catch(e) {
        next(ApiError.badRequest(e.message))

    }
}

async getAll(req,res,next) {
    try{
        const order = await Review.findAll({
            
            include:[{
                    model: Product,
                    attributes: ['name', 'cost', 'img', 'desc']
            }]
        })
        if (!order) {
            return next(ApiError.notFound('Отзывы не найдены'));
        }
        return res.json(order)
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
}


async deleteAll(req,res,next) {
    try {
    const id = req.body
    Review.destroy({where:id})
    return res.json({message: "ok"})
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
}
}
    
    module.exports = new rewController()