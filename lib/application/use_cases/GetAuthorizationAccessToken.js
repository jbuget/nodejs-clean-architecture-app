'use strict';

const Promise = require('bluebird');

module.exports = class {

  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute(email, password) {
    return this.userRepository.getByEmail(email)
      .then(user => {
        if (!user || user.password !== password) {
          return Promise.reject(new Error(`Bad credentials`));
        }
        return Promise.resolve('abcd-1234-efgh-5678');
      });
  }
};