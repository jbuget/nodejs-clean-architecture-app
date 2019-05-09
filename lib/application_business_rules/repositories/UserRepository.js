'use strict';

module.exports = class {
  
  constructor(repository) {
    this.repository = repository;
  }

  persist(userEntity) {
    return this.repository.persist(userEntity);
  }

  merge(userEntity) {
    return this.repository.merge(userEntity);
  }

  remove(userId) {
    return this.repository.remove(userId);
  }

  get(userId) {
    return this.repository.get(userId);
  }

  getByEmail(email) {
    return this.repository.getByEmail(email);
  }

  find() {
    return this.repository.find();
  }

};