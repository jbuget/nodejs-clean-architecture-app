'use strict';

const User = require('../domain/User');

module.exports = class {

  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute(firstName, lastName, email, password) {
    const user = new User(null, firstName, lastName, email, password);
    return this.userRepository.persist(user);
  }
};