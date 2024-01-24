const catchError = require('../utils/catchError');
const Image = require('../models/Image');

const getAll = catchError(async (req, res) => {
  const images = await Image.findAll();
  return res.json(images);
});

module.exports = {
  getAll
}