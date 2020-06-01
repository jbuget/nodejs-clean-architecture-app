'use strict';

const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');
const UserSerializer = require('../../interfaces/serializers/UserSerializer');
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory');
const UserRepositorySQLite= require('../repositories/UserRepositorySQLite');
const UserRepositoryMongo = require('../repositories/UserRepositoryMongo');

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