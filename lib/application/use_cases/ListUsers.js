'use strict';

module.exports = class {

  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute() {
    return this.userRepository.find();
  }

};