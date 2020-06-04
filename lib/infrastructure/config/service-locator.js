'use strict';

const environment = require('./environment');
const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');
const UserSerializer = require('../../interfaces/serializers/user-serializer');
const ItemRepositoryMongo = require('../repositories/ItemRepositoryMongo');
const UserRepositorySql = require('../repositories/UserRepositorySql');

function buildBeans() {

  const beans = {
    accessTokenManager: new JwtAccessTokenManager(),
    itemRepository: new ItemRepositoryMongo(),
    userSerializer: new UserSerializer(),
    userRepository: new UserRepositorySql(),
  };

  if (environment === 'test') {
    // …
  }

  return beans;
}

module.exports = buildBeans();
