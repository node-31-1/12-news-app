const { getAll } = require('../controllers/image.controllers');
const express = require('express');

const imageRouter = express.Router();

imageRouter.route('/images')
    .get(getAll)

module.exports = imageRouter;