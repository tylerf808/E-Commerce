// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { Trip } = require('../../../../jhu-bal-virt-fsf-pt-02-2021-u-c/13-ORM/01-Activities/28-Stu_Mini-Project/Solved/Main/models');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id'
})

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: {
        model: ProductTag,
        unique: false
    }
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: {
        model: ProductTag,
        unique: false
    }
})

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};