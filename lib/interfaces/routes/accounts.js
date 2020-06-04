'use strict';

const accountsController = require('../controllers/accounts-controller');

module.exports = {
  name: 'accounts',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'POST',
        path: '/accounts',
        handler: accountsController.register,
        options: {
          description: 'Create an account for a user',
          tags: ['api'],
        },
      },
    ]);
  }
};