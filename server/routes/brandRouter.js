const Router = require('express');
const brandController = require('../controllers/brandController');

const router = new Router();

/**
 * @openapi
 * /brand/:
 *   post:
 *     description: Для создания бренда товара
 *     responses: 
 *       200: 
 *         description: A successful response
 */
router.post('/', brandController.create);

/**
 * @openapi
 * /brand/:
 *   get:
 *     description: Для получения всех брендов товаров
 *     responses: 
 *       200: 
 *         description: A successful response
 */
router.get('/', brandController.getAll);

module.exports = router;
