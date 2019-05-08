'use strict';

const Hapi = require('@hapi/hapi');
const Package = require('../../../package');

const createServer = async () => {

  // Create a server with a host and port
  const server = Hapi.server({
    port: process.env.PORT || 3000
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
          title: 'Test API Documentation',
          version: Package.version,
        },
      }
    },
    {
      plugin: require('@hapi/good'),
      options: {
        ops: {
          interval: 1000 * 60
        },
        reporters: {
          myConsoleReporter: [
            {
              module: '@hapi/good-squeeze',
              name: 'Squeeze',
              args: [{ ops: '*', log: '*', error: '*', response: '*' }]
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
    require('./oauth'),
    require('./hello'),
    require('./private'),
    require('./users'),
  ]);

  return server;
};

module.exports = createServer;