'use strict';

const JwtAccessTokenManager = require('./security/JwtAccessTokenManager');
const UserSerializer = require('./serializers/UserSerializer');
const UserRepositoryInMemory = require('./storage/UserRepositoryInMemory');
const UserRepositorySQLite= require('./storage/UserRepositorySQLite');
const UserRepositoryMongo = require('./storage/UserRepositoryMongo');

function buildBeans() {

  /*
   * Default implementations
   */
  const beans = {
    userRepository: new UserRepositoryMongo(),
    accessTokenManager: new JwtAccessTokenManager(),
    userSerializer: new UserSerializer(),
  };

  /*
   * Environment specific implementations
   */
  if (process.env.NODE_ENV === 'test') {
    beans.userRepository = new UserRepositoryInMemory();
  }

  return beans;
}

module.exports = buildBeans();