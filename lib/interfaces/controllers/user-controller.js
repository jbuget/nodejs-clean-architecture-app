'use strict';

const getUser = require('../../application/use_cases/accounts/get-user');

module.exports = {

  async getInfo(request, h) {

    // Context
    const { environment, serviceLocator } = request.server.app;

    // Input
    const input = { userId: request.auth.credentials.uid };

    // Treatment
    const user = await getUser(input, serviceLocator);

    // Output
    return {
      id: user.id,
      object: 'user',
      data: {
        'first_name': user.firstName,
        'last_name': user.lastName,
        'email': user.email,
        'status': user.status,
      },
      links: {
        'self': `${environment.server.url}/user`,
        'items': `${environment.server.url}/user/items`,
      }
    };
  },

};
