const Router = require('express');

const router = new Router();
const productController = require('../controllers/productController');

/**
 * @openapi
 * /product/:
 *   post:
 *     description: Для создания продукта
 *     responses: 
 *       200: 
 *         description: A successful response
 */
router.post('/', productController.create);

/**
 * @openapi
 * /product/:
 *   get:
 *     description: Для получения всех продуктов
 *     responses: 
 *       200: 
 *         description: A successful response
 */
router.get('/', productController.getAll);

/**
 * @openapi
 * /product/{id}/:
 *   get:
 *     description: Для получения продукта по id
 *     responses: 
 *       200: 
 *         description: A successful response
 */
router.get('/:id', productController.getOne);

module.exports = router;
