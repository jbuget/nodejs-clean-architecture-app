'use strict';

const Hapi = require('@hapi/hapi');
const Package = require('../../../package');

const createServer = async () => {

  // Create a server with a host and port
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    "routes": {
        "cors": {
            origin: ["*"],
            headers: ["Accept", "Content-Type"],
            additionalHeaders: ["X-Requested-With"]
        }
    }
  });

  // Register vendors plugins
  await server.register([
    require('blipp'),
    require('@hapi/inert'),
    require('@hapi/vision'),
    {
      plugin: require('hapi-swagger'),
      options: {
        info: {
          title: 'Ontology API Documentation',
          version: Package.version,
        },
      }
    },
    {
      plugin: require('@hapi/yar'),
      options: {
        storeBlank: false,
        cookieOptions: {
          password: 'the-password-must-be-at-least-32-characters-long',
          isSecure: true
        }
      }
    },
    {
      plugin: require('@hapi/good'),
      options: {
        ops: {
          interval: 1000 * 60
        },
        reporters: {
          myConsoleReporter: [{
              module: '@hapi/good-squeeze',
              name: 'Squeeze',
              args: [{
                ops: '*',
                log: '*',
                error: '*',
                response: '*'
              }]
            },
            {
              module: '@hapi/good-console'
            },
            'stdout'
          ]
        }
      },
    },
  ]);

  // Register custom plugins
  await server.register([
    require('./datapoints'),
  ]);

  return server;
};

module.exports = createServer;
