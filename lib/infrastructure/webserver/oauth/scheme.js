'use strict';

const AuthorizationController = require('../../../interfaces/controllers/AuthorizationController');

module.exports = () => {
  return {
    authenticate: AuthorizationController.verifyAccessToken
  };
};