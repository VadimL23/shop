const Router = require('express');

const router = new Router();
const mainSliderController = require('../controllers/mainSliderController');

router.get('/', mainSliderController.getAll);

module.exports = router;
