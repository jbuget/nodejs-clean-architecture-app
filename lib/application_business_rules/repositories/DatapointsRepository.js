'use strict';

module.exports = class {

  constructor(repository) {
    this.repository = repository;
  }

  resolveQuery(query) {
    return this.repository.resolveQuery(query);
  }
};
