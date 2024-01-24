const express = require('express');
const userRouter = require('./user.router');
const categoryRouter = require('./category.router');
const newsRouter = require('./news.router');
const imageRouter = require('./image.router');
const router = express.Router();

// colocar las rutas aquí
router.use(userRouter);
router.use(categoryRouter);
router.use(newsRouter);
router.use(imageRouter);

module.exports = router;