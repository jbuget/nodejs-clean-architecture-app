'use strict';

module.exports = {
  name: 'private',
  version: '1.0.0',
  register: async function (server) {

    server.route([
      {
        method: 'GET',
        path: '/private',
        config: {
          auth: 'oauth-jwt',
          handler: (request) => request.auth.credentials.uid
        }
      }
    ]);
  }
};