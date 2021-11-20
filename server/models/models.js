const sequelize = require('../db.js');

const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Cart = sequelize.define('cart', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const CartProduct = sequelize.define('cart_product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Product = sequelize.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  weight: {
    type: DataTypes.ENUM,
    values: ['300 г', '500 г', '1 кг'],
  },
  img: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  quantity: { type: DataTypes.INTEGER, deffaultValue: 100, allowNull: false },
});

const Category = sequelize.define('category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  img: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
});

const Brand = sequelize.define('brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define('rating', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
});

const ProductInfo = sequelize.define('product_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  tile: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const CategoryBrand = sequelize.define('type_brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const MainSlider = sequelize.define("main_slider",{
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  img: { type: DataTypes.STRING, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  subtitle: { type: DataTypes.STRING, allowNull: false },
  background: { type: DataTypes.STRING, allowNull: false },
  color: { type: DataTypes.STRING, allowNull: false },
    
});

User.hasOne(CartProduct);
CartProduct.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Cart.hasMany(CartProduct);
CartProduct.belongsTo(Cart);

Category.hasMany(Product);
Product.belongsTo(Category);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(ProductInfo, { as: 'info' });
Rating.belongsTo(Product);

Category.belongsToMany(Brand, { through: CategoryBrand });
Brand.belongsToMany(Category, { through: CategoryBrand });

module.exports = {
  User,
  Cart,
  CartProduct,
  Product,
  Category,
  Brand,
  Rating,
  CategoryBrand,
  ProductInfo,
  MainSlider
};
