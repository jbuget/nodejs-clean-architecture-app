'use strict';

module.exports = class {

  persist(item) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  updateConnectionItem(item) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  remove(itemId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  get(itemId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  findByOwner(ownerId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

};
