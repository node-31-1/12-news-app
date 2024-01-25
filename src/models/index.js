const Category = require('./Category');
const Favorite = require('./Favorite');
const Image = require('./Image');
const News = require('./News');
const User = require('./User');

News.belongsTo(Category);
Category.hasMany(News);

News.hasMany(Image);
Image.belongsTo(News);

User.hasMany(Favorite);
Favorite.belongsTo(User);

News.hasMany(Favorite);
Favorite.belongsTo(News);
