'use strict';

const apiController = require('../controllers/api-controller');

module.exports = {
  name: 'hello',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'GET',
        path: '/',
        handler: apiController.getInfo,
        options: {
          description: 'Get API information',
          tags: ['api'],
        },
      },
    ]);
  }
};