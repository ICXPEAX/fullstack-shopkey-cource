const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../moduls/moduls')


const generateJwt = (id, email, role) => {
    return jwt.sign({id, email, role }, process.env.SECRET_KEY, {expiresIn: '12h'})
}

class UserController {
async registration(req, res,next) {
    const {email,password,firstname,lastname,surname,phonenumber, role} = req.body
    console.log(email,password,firstname,lastname,surname,phonenumber)
     if (!email || !password || !firstname || !lastname || !surname || !phonenumber)
    {
        return next(ApiError.badRequest('Incorrect data'))
    } 
    const candidate = await User.findOne({where: {email}})
    const candidate_phone = await User.findOne({where: {phonenumber}})
    if (candidate && candidate_phone)
    {
        return next(ApiError.badRequest('User existing'))
    }
    const hasPassword = await bcrypt.hash(password, 5)
    const user = await User.create({email,role,password: hasPassword})
    const basket = await Basket.create({id: user.id})
    const token = generateJwt(user.id,user.email,user.role)
    return res.json({token})

}
async login(req, res, next) {
    try {
    const {email, password} = req.body
    console.log(email,password)
    const user = await User.findOne({where:{email}})
     if (!user) {
        return next(ApiError.internal('User not exist'))
    } 
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
        return next(ApiError.internal('Uncorrect Password'))
    }
    const token = generateJwt(user.id,user.email,user.role)
    console.log(token)
    return res.json({token})
}
catch (e)
{
    next(ApiError.badRequest(e.message))
}
    
}
async cheak(req, res, next) {
    const token = generateJwt(req.user.id,req.user.email,req.user.role)
    return res.json({token})

}
}

module.exports = new UserController()