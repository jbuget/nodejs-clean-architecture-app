const AuthorizationController = require('../../../../interfaces/controllers/AuthorizationController');
const scheme = require('./scheme');

const authorizationController = new AuthorizationController();

module.exports = {
  name: 'oauth',
  version: '1.0.0',
  register: (server, options) => {
    server.auth.scheme('oauth', scheme);

    server.auth.strategy('oauth-jwt', 'oauth');

    server.route({
      method: 'POST',
      path: '/oauth/token',
      handler: (request, h) => authorizationController.getAccessToken(request, h),
    });
  },
};
