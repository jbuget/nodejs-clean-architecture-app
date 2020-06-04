'use strict';

const AuthorizationController = require('../../../interfaces/controllers/authorization-controller');

module.exports = () => {
  return {
    authenticate: AuthorizationController.verifyAccessToken
  };
};