'use strict';

module.exports = class {

  constructor() {}

  /*
   * The methods above must be overridden by concrete implementation (in "Interfaces and Adapters" layer)
   */

  persist(userEntity) {}

  merge(userEntity) {}

  remove(userId) {}

  get(userId) {}

  getByEmail(email) {}

  find() {}

};