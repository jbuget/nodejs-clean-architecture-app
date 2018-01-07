'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/private',
    config: {
      auth: 'oauth-jwt',
      handler: (request) => request.auth.credentials.user
    }
  }
];