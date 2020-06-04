'use strict';

const mongoose = require('mongoose');
const environment = require('../../config/environment');

mongoose.connect(environment.databases.items.url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to MongoDB database!')
});

module.exports = mongoose;
