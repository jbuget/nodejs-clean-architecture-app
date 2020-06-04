const mongoose = require('../mongoose');

const itemSchema = new mongoose.Schema({
  ownerId: String,
  type: String,
  username: String,
  password: String,
  website: String,
  creationDate: Date,
  updateDate: Date,
});

module.exports = mongoose.model('Item', itemSchema);
