'use strict';

const Item = require('./Item');

module.exports = class extends Item {

  constructor({ id, ownerId, username, password, website, creationDate, updateDate } = {}) {
    super({ id, ownerId, type: Item.types.LOGIN, creationDate, updateDate });
    this.username = username;
    this.password = password;
    this.website = website;
  }

};