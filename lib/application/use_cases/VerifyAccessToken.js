'use strict';

module.exports = class {

  constructor(accessTokenManager) {
    this.accessTokenManager = accessTokenManager;
  }

  execute(accessToken) {
    const decoded = this.accessTokenManager.decode(accessToken);
    if (!decoded) {
      return Promise.reject(new Error('Invalid access token'));
    }
    return Promise.resolve({uid: decoded.uid});
  }
};