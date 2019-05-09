'use strict';

const Boom = require('@hapi/boom');
const UserRepositoryInMemory = require('../storage/UserRepositoryInMemory');
const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');
const GetAccessToken = require('../../application_business_rules/use_cases/GetAccessToken');
const VerifyAccessToken = require('../../application_business_rules/use_cases/VerifyAccessToken');

module.exports = {

  async getAccessToken(request) {

    // Input
    const grantType = request.payload['grant_type'];
    const email = request.payload['username'];
    const password = request.payload['password'];

    if (!grantType || grantType !== 'password') {
      return Boom.badRequest('Invalid authentication strategy');
    }

    // Treatment
    const userRepository = new UserRepositoryInMemory();
    const accessTokenManager = new JwtAccessTokenManager();

    try {
      const accessToken = await GetAccessToken(email, password, { userRepository, accessTokenManager });

      // Output
      return accessToken;
    } catch (err) {
      return Boom.unauthorized('Bad credentials');
    }
  },

  verifyAccessToken(request, h) {

    // Input
    const authorizationHeader = request.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      throw Boom.badRequest('Missing or wrong Authorization request header', 'oauth');
    }
    const accessToken = authorizationHeader.replace(/Bearer/gi, '').replace(/ /g, '');

    // Treatment
    const accessTokenManager = new JwtAccessTokenManager();
    try {
      const { uid } = VerifyAccessToken(accessToken, { accessTokenManager });

      // Output
      return h.authenticated({
        credentials: { uid },
        artifacts: { accessToken: accessToken }
      });
    } catch (err) {
      return Boom.unauthorized('Bad credentials');
    }
  },

};