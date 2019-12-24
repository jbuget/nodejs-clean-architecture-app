'use strict';

const DatapointsController = require('../../interface_adapters/controllers/DatapointsController');

module.exports = {
  name: 'datapoints',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'GET',
        path: '/users',
        handler: DatapointsController.findUsers,
        options: {
          description: 'List all users',
          tags: ['api'],
        },
      }
    ]);
  }
};
