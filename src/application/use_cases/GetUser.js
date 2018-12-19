'use strict';

module.exports = class {

  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute(userId) {
    return this.userRepository.get(userId);
  }
};