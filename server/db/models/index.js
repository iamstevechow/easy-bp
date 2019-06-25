const Sequelize = require('sequelize');
const db = require('../database');
const User = require('./User');

module.exports = {
  db,
  User,
};
