const Router = require('express');

const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @openapi
 * /registration/:
 *   post:
 *     description: Для регистрации нового пользователя
 *     responses: 
 *       200: 
 *         description: A successful response
 */
router.post('/registration', userController.registration);

/**
 * @openapi
 * /login/:
 *   post:
 *     description: Для входа пользователя в систему
 *     responses: 
 *       200: 
 *         description: A successful response
 */
router.post('/login', userController.login);

/**
 * @openapi
 * /auth/:
 *   get:
 *     description: Для входа пользователя в систему
 *     responses: 
 *       200: 
 *         description: A successful response
 */
router.get('/auth', authMiddleware, userController.check);

module.exports = router;
