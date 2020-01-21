'use strict';
const Joi = require('@hapi/joi');

const DatapointsController = require('../../interface_adapters/controllers/DatapointsController');

module.exports = {
  name: 'datapoints',
  version: '1.0.0',
  register: async (server) => {

    server.route([{
      method: 'POST',
      path: '/datapoints',
      handler: DatapointsController.getDatapoints,
      options: {
        description: 'Get datapoints for a visualization query.',
        tags: ['api'],
        validate: {
          payload: Joi.object({
            phrase: Joi.alternatives().try(
              Joi.array().items(Joi.string()),
              Joi.string())
              .required(),
            range:Joi.string().required(),
            category: Joi.string().required() //Category as represented by ArXiv short code.
          }).options({
            stripUnknown: true
          })
        }
      },
    }]);
  }
};
