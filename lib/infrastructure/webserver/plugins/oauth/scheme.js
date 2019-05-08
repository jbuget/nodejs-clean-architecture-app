'use strict';

const AuthorizationController = require('../../../../interfaces/controllers/AuthorizationController');
const authorizationController = new AuthorizationController();

module.exports = () => {
  return {
    authenticate: authorizationController.verifyAccessToken
  };
};