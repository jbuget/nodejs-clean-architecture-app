'use strict';

const Promise = require('bluebird');

module.exports = class {

  constructor(userRepository, accessTokenManager) {
    this.userRepository = userRepository;
    this.accessTokenManager = accessTokenManager;
  }

  execute(email, password) {
    return this.userRepository.getByEmail(email)
      .then(user => {
        if (!user || user.password !== password) {
          return Promise.reject(new Error(`Bad credentials`));
        }
        return this.accessTokenManager.generate({uid: user.id});
      });
  }
};