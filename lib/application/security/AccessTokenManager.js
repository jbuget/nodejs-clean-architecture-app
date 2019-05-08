module.exports = class {

  constructor(accessTokenManager) {
    this.accessTokenManager = accessTokenManager;
  }

  generate() {
    return this.accessTokenManager.generate();
  }

  decode() {
    return this.accessTokenManager.decode();
  }

};