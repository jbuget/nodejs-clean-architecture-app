'use strict';

const Boom = require('boom');
const UserRepositoryInMemory = require('../storage/UserRepositoryInMemory');
const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');
const GetAccessToken = require('../../application/use_cases/GetAccessToken');
const VerifyAccessToken = require('../../application/use_cases/VerifyAccessToken');

module.exports = {

  getAccessToken(request, h) {
    const grantType = request.payload['grant_type'];
    const email = request.payload['username'];
    const password = request.payload['password'];

    if (!grantType || grantType !== 'password') {
      return Boom.badRequest('Invalid authentication strategy');
    }

    const userRepository = new UserRepositoryInMemory();
    const accessTokenManager = new JwtAccessTokenManager();

    const useCase = new GetAccessToken(userRepository, accessTokenManager);
    return useCase.execute(email, password)
      .catch(() => Boom.unauthorized('Bad credentials'));
  },

  verifyAccessToken(request, h) {
    const authorizationHeader = request.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      throw Boom.badRequest('Missing or wrong Authorization request header', 'oauth');
    }
    const accessToken = authorizationHeader.replace(/Bearer/gi, '').replace(/ /g, '');

    const accessTokenManager = new JwtAccessTokenManager();
    const useCase = new VerifyAccessToken(accessTokenManager);
    return useCase.execute(accessToken)
      .then(({uid}) => h.authenticated({
        credentials: { uid },
        artifacts: { accessToken: accessToken }
      }))
      .catch(() => Boom.unauthorized('Bad credentials'));
  },

};