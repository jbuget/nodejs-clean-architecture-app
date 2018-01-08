'use strict';

const AuthorizationController = require('../../../../interfaces/controllers/AuthorizationController');
const authorizationController = new AuthorizationController();

module.exports = (server, options) => {
  return {
    authenticate: (request, h) => authorizationController.verifyAccessToken(request, h)

};
};