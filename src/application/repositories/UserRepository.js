'use strict';

module.exports = class {

  constructor() {}

  persist(userEntity) {
    // To be overridden in concrete implementation
  }

  merge(userEntity) {
    // To be overridden in concrete implementation
  }

  remove(userId) {
    // To be overridden in concrete implementation
  }

  get(userId) {
    // To be overridden in concrete implementation
  }

  getByEmail(email) {
    // To be overridden in concrete implementation
  }

  find() {
    // To be overridden in concrete implementation
  }

};