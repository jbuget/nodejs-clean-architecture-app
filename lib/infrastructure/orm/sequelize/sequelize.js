'use strict';

const { Sequelize } = require('sequelize');
const environment = require('../../config/environment');

const sequelize = new Sequelize(environment.databases.accounts.url);

sequelize.import('./models/User');

module.exports = sequelize;