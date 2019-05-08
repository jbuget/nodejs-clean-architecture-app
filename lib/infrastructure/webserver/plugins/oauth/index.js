'use strict';

const AuthorizationController = require('../../../../interfaces/controllers/AuthorizationController');
const authorizationController = new AuthorizationController();

module.exports = {
  name: 'oauth',
  version: '1.0.0',
  register: (server) => {

    server.auth.scheme('oauth', require('./scheme'));

    server.auth.strategy('oauth-jwt', 'oauth');

    server.route({
      method: 'POST',
      path: '/oauth/token',
      handler: authorizationController.getAccessToken
    });
  }
};
