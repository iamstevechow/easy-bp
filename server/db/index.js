const db = require('./database');
const Sequelize = require('sequelize');
const { User } = require('./models');

//Define your associations here

module.exports = {
  db,
  User,
};
