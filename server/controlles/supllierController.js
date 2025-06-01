const ApiError = require('../error/ApiError')
const {Supplier,Product} = require('../moduls/moduls')

class supplierController {
    async create(req, res, next) {
    try {
    const {suppliername,email,site} = req.body
    const names = await Supplier.findOne({where:{suppliername}})
    const emails = await Supplier.findOne({where:{email}})
    const sites = await Supplier.findOne({where:{site}})
 
    if (!emails && !sites && !names) {
        const supplier = await Supplier.create({suppliername: suppliername,email: email, site: site})
        return res.json(supplier)
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
        const {id} = req.body
        const cheakId = await Supplier.findOne({where:{id}})
        if (!cheakId) {
            return next(ApiError.badRequest('supplier not found'));
        }
            
        const supplier = await Supplier.findAll({
            where:{id},
            include:[{
                    model: Product,
                    attributes: ['name', 'cost', 'img', 'desc']
            }]
        })
        if (!supplier) {
            return next(ApiError.notFound('Отзывы не найдены'));
        }
        return res.json(supplier)
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
}


async deleteAll(req,res,next) {
    try {
    const id = req.body
    Supplier.destroy({where:id})
    return res.json({message: "ok"})
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
}
}
module.exports = new supplierController()