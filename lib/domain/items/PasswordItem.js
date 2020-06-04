'use strict';

const Item = require('./Item');

module.exports = class extends Item {

  constructor({ id, ownerId, username, password, website, creationDate, updateDate } = {}) {
    super({ id, ownerId, type: Item.types.PASSWORD, creationDate, updateDate });
    this.password = password;
  }

};