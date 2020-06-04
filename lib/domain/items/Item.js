'use strict';

module.exports = class {

  constructor({ id, ownerId, type, creationDate, updateDate } = {}) {
    this.id = id;
    this.ownerId = ownerId;
    this.type = type;
    this.creationDate = creationDate;
    this.updateDate = updateDate;
  }

};

module.exports.types = {
  LOGIN: 'LOGIN',
  PASSWORD: 'PASSWORD',
};