const Router = require('express');
const router = new Router();
const productRouter = require('./productRouter');
const brandRouter = require('./brandRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const mainSliderRouter = require('./mainSliderRouter');

router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/brand', brandRouter);
router.use('/product', productRouter);
router.use('/slider', mainSliderRouter);
module.exports = router;
