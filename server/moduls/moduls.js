const { FOREIGNKEYS } = require('sequelize/lib/query-types')
const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    firstname: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    phonenumber: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},

})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketProduct = sequelize.define('basket_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER},
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.BOOLEAN},
})


const Review = sequelize.define('review', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rew: {type: DataTypes.STRING},
})

const Supplier = sequelize.define('supplier', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    suppliername: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    site: {type: DataTypes.STRING},
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    category: {type: DataTypes.STRING},  
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    brand: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    cost: {type: DataTypes.INTEGER},
    img: {type: DataTypes.STRING},
    desc: {type: DataTypes.STRING},
   

})


User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Review)
Review.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

BasketProduct.hasMany(Order)
Order.belongsTo(BasketProduct)

Product.hasOne(BasketProduct)
BasketProduct.belongsTo(Product)

Product.hasOne(Review)
Review.belongsTo(Product)

Supplier.hasMany(Product)
Product.belongsTo(Supplier)

Category.hasMany(Product)
Product.belongsTo(Category)

module.exports = { User,Basket,BasketProduct,Order,Product,Supplier,Review,Category}