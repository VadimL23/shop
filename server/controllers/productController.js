const { Product, ProductInfo } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class ProductController {
  async create(req, res, next) {
    try {
      const { id, name, price, rate, descripton, weight, img, quantity } =
        req.body;

      //            const {
      //                img
      //            } = req.files;
      //            let fileName = uuid.v4() + '.jpg';
      //            img.mv(path.resolve(__dirname, '..', 'static', fileName));

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          ProductInfo.create({
            title: i.title,
            description: i.description,
            productId: product.id,
          })
        );
      }

      const product = await Product.create({
        name,
        price,
        brandId,
        typeId,
        img,
      });
      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    let products;
    page = page || 1;
    limit = limit || 9;

    let offset = page * limit - limit;

    try {
      if (!brandId && !typeId) {
        products = await Product.findAndCountAll({
          limit,
          offset,
        });
      }

      if (brandId && !typeId) {
        produsct = await Product.findAndCountAll({
          where: {
            brandId,
          },
          limit,
          offset,
        });
      }

      if (!brandId && typeId) {
        products = await Product.findAndCountAll({
          where: {
            typeId,
          },
          limit,
          offset,
        });
      }

      if (brandId && typeId) {
        products = await Product.findAndCountAll({
          where: {
            brandId,
            typeId,
          },
          limit,
          offset,
        });
      }

      return res.json(products);
    } catch (e) {
      console.log(e.message);
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({
      where: {
        id,
      },
      include: [
        {
          model: ProductInfo,
          as: 'info',
        },
      ],
    });
    return res.json(product);
  }
}

module.exports = new ProductController();
