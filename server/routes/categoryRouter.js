const Router = require('express');

const router = new Router();
const categoryController = require('../controllers/categoryController');
const checkRole = require('../middleware/checkRoleMiddleware');

/**
 * @openapi
 * /category/:
 *   post:
 *     description: Для создания категории товаров
 *     responses: 
 *       200: 
 *         description: A successful response
 */
router.post('/', checkRole('ADMIN'), categoryController.create);

/**
 * @openapi
 * /category/:
 *   get:
 *     description: Для получения всех категорий товаров
 *     responses: 
 *       200: 
 *         description: A successful response
 */
router.get('/', categoryController.getAll);

module.exports = router;
