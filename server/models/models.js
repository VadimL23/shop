const sequelize = require("../db.js");

const {DataTypes} =require("sequelize");

const User = sequelize.define("user",
                             {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncremetn:true},
    email:{type:DataTypes.STRING, unique:true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue:"USER"},
});

const Basket = sequelize.define("basket",
                             {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncremetn:true},
});

const BasketDevice = sequelize.define("basket_device",
                             {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncremetn:true},
});

const Device = sequelize.define("device",
                             {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncremetn:true},
    name:{type:DataTypes.STRING, unique:true, allowNull:false},
    price:{type:DataTypes.INTEGER, allowNull:false},
    rating:{type:DataTypes.INTEGER, deffaultValue:0},
    img:{type:DataTypes.STRING},

});

const Type = sequelize.define("type",
                             {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncremetn:true},
    name:{type:DataTypes.STRING, unique:true, allowNull:false},
});

const Brand = sequelize.define("brand",
                             {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncremetn:true},
    name:{type:DataTypes.STRING, unique:true, allowNull:false},
});

const Rating = sequelize.define("rating",
                             {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncremetn:true},
    rate:{type:DataTypes.INTEGER, allowNull:false, defaultValue:0},
});

const DeviceInfo = sequelize.define("device_info",
                             {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncremetn:true},
    tile:{type:DataTypes.STRING, allowNull:false, },
    description:{type:DataTypes.STRING, allowNull:false, },
});

const TypeBrand = sequelize.define("type_brand",{
  id:{type:DataTypes.INTEGER, primaryKey:true, autoIncremetn:true},
});

User.hasOne(BasketDevice);
BasketDevice.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Type.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(Rating);
Rating.belongsTo(Device);


Device.hasMany(BasketDevice);
Rating.belongsTo(Device);

Device.hasMany(DeviceInfo);
Rating.belongsTo(Device);

Type.belongsToMany(Brand, {through:TypeBrand});
Brand.belongsToMany(Type, {through:TypeBrand});

module.exports = {
    User, 
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    DeviceInfo
}

