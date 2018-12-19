const AuthorizationController = require('../../../../interfaces/controllers/AuthorizationController');

const authorizationController = new AuthorizationController();

module.exports = (server, options) => ({
  authenticate: (request, h) => authorizationController.verifyAccessToken(request, h),
});
