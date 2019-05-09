'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize({ dialect: 'sqlite' });

sequelize.import('./models/User');

module.exports = sequelize;