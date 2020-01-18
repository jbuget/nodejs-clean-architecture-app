'use strict';
const Joi = require('@hapi/joi');

const DatapointsController = require('../../interface_adapters/controllers/ParamsController');

module.exports = {
  name: 'datapoints',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'PUT',
        path: '/params',
        handler: ParamsController.setParams,
        options: {
          description: 'Set parameters for future visualization queries.',
          tags: ['api'],
        },
      }
    ]);
  }
};
