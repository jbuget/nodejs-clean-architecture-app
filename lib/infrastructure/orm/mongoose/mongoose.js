'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://root:example@localhost:27017/test?authSource=admin', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to MongoDB database!')
});

module.exports = mongoose;
