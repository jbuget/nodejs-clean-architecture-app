'use strict';

const Boom = require('boom');
const Promise = require('bluebird');
const UserRepositoryInMemory = require('../storage/UserRepositoryInMemory');

const GetAuthorizationAccessToken = require('../../application/use_cases/GetAuthorizationAccessToken');

module.exports = class {

  constructor() {
    this.userRepository = new UserRepositoryInMemory();
  }

  getAccessToken(request, h) {
    const grantType = request.payload['grant_type'];
    const email = request.payload['username'];
    const password = request.payload['password'];

    if (!grantType || grantType !== 'password') {
      return Boom.badRequest('Invalid authentication strategy');
    }

    const useCase = new GetAuthorizationAccessToken(this.userRepository);
    return useCase.execute(email, password)
      .catch(() => Boom.unauthorized('Bad credentials'));
  }

  verifyUserCredentials(request) {
    return true;
  }

};