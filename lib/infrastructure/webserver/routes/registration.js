'use strict';

module.exports = {
  name: 'registration',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'POST',
        path: '/registration',
        handler: (request, h) => {
          return h.response().created();
        },
      },
    ]);
  }
};