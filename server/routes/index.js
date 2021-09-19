const Router = require('express');
const router = new Router();
const productRouter = require('./productRouter');
const brandRouter = require('./brandRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');

router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/brand', brandRouter);
router.use('/product', productRouter);

module.exports = router;
