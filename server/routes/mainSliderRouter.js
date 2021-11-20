const Router = require('express');

const router = new Router();
const mainSliderController = require('../controllers/mainSliderController');

/**
 * @openapi
 * /slider/:
 *   get:
 *     description: Для получения данных для главного слайдера
 *     responses: 
 *       200: 
 *         description: A successful response
 */
router.get('/', mainSliderController.getAll);

module.exports = router;
