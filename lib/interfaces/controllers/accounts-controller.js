'use strict';

const registerUser = require('../../application/use_cases/accounts/register-user');

module.exports = {

  async register(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { first_name: firstName, last_name: lastName, email, password } = request.payload;

    // Treatment
    await registerUser(firstName, lastName, email, password, serviceLocator);

    // Output
    return h.response().created();
  },

};