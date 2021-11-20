const { MainSlider } = require('../models/models');
const ApiError = require('../error/ApiError');

class MainSliderController {
  async create(req, res) {
     
    try {
      const { 
          id,
          img,
          title,
          subtitle,
          background,
          color} =
        req.body;

      const mainSlider = await MainSlider.create({
          id,
          img,
          title,
          subtitle,
          background,
          color
      });
      return res.json(mainSlider);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const mainSlider = await MainSlider.findAll();
    return res.json(mainSlider);
  }
}

module.exports = new MainSliderController();
