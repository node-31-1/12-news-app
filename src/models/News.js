const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const News = sequelize.define('news', {
  headline: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lead: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imageDescription: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  // categoryId
});

module.exports = News;