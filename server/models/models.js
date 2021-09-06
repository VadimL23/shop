const sequelize = require("../db.js");

const {DataTypes} =require("sequelize");

const User = sequelize.define("user",
                             {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email:{type:DataTypes.STRING, unique:true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue:"USER"},
});

const Basket = sequelize.define("basket",
                             {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
});

const BasketProduct = sequelize.define("basket_product",
                             {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
});

const Product = sequelize.define("product",
                             {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true, allowNull:false},
    price:{type:DataTypes.INTEGER, allowNull:false},
    rating:{type:DataTypes.INTEGER, deffaultValue:0},
    img:{type:DataTypes.STRING},

});

const Type = sequelize.define("type",
                             {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true, allowNull:false},
});

const Brand = sequelize.define("brand",
                             {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true, allowNull:false},
});

const Rating = sequelize.define("rating",
                             {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    rate:{type:DataTypes.INTEGER, allowNull:false, defaultValue:0},
});

const ProductInfo = sequelize.define("product_info",
                             {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    tile:{type:DataTypes.STRING, allowNull:false, },
    description:{type:DataTypes.STRING, allowNull:false, },
});

const TypeBrand = sequelize.define("type_brand",{
  id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
});

User.hasOne(BasketProduct);
BasketProduct.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Type.hasMany(Product);
Product.belongsTo(Brand);

Product.hasMany(Rating);
Rating.belongsTo(Product);


Product.hasMany(BasketProduct);
Rating.belongsTo(Product);

Product.hasMany(ProductInfo,{as:'info'});
Rating.belongsTo(Product);

Type.belongsToMany(Brand, {through:TypeBrand});
Brand.belongsToMany(Type, {through:TypeBrand});

module.exports = {
    User, 
    Basket,
    BasketProduct,
    Product,
    Type,
    Brand,
    Rating,
    TypeBrand,
    ProductInfo
}

