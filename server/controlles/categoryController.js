const ApiError = require('../error/ApiError')
const {Supplier,Product, Category} = require('../moduls/moduls')

class categoryController {
    async create(req, res, next) {
    try {
    const {category} = req.body
    const categorys = await Category.findOne({where:{category}})
 
    if (!categorys) {
        const categoryes = await Category.create({category: category})
        return res.json(categoryes)
    }
    else {
        return next(ApiError.badRequest('site or email exist'));
    }
    

    
    } catch(e) {
        next(ApiError.badRequest(e.message))

    }
}

async getAll(req,res,next) {
    try{
        const  category = await Category.findAll()
       
        return res.json(category)
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
}


async deleteAll(req,res,next) {
    try {
    const id = req.body
    Category.destroy({where:id})
    return res.json({message: "ok"})
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
}
}
module.exports = new categoryController()