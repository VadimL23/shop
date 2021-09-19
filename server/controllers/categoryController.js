const { Category } = require('../models/models');
const ApiError = require('../error/ApiError');

class CategoryController {
  async create(req, res) {
    const { id, name } = req.body;
    const type = await Type.create({ id, name });
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Category.findAll();
    return res.json(types);
  }
}

module.exports = new CategoryController();
