const uuid = require('uuid')
const path = require('path')
const { Product} = require("../moduls/moduls")
const ApiError = require('../error/ApiError')
class productController {
    async create(req, res, next) {
        try {
            const {brand, name, cost, category , desc, supplierId, categoryId } = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const product = await Product.create({brand,name,cost,category, desc,supplierId,categoryId, img: fileName})
            return res.json(product)
        

        } catch(e) {
            next(ApiError.badRequest(e.message))


        }
       
    }
    async getAll(req, res) {
        const {categoryId} = req.query
        let product
        if (categoryId)
        {
            product = await Product.findAll({where:{categoryId}})
                
        }
        if (!categoryId)
        {
            product = await Product.findAll()
        }
        return res.json(product)
        
    }
    async getOne(req, res) {
        const {id} = req.params
        const product = await Product.findOne(
            {
                where: {id}
            }

            
        )
        return res.json(product)
        
    }
    async delete(req,res,next) {
        try {
            const productId = req.body
            Product.destroy({where:productId})
            return res.json({message: "ok"})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    
}
    
module.exports = new productController()