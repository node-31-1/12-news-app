const Category = require('./Category');
const Image = require('./Image');
const News = require('./News');

News.belongsTo(Category);
Category.hasMany(News);

News.hasMany(Image);
Image.belongsTo(News);
