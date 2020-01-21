'use strict';

module.exports = class {

  constructor(repository) {
    this.repository = repository;
  }

  async resolveQuery(query) {
    return await this.repository.resolveQuery(query);
  }
};
