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
    require('inert'),
    require('vision'),
    {
      plugin: require('hapi-swagger'),
      options: {
        info: {
          title: 'Test API Documentation',
          version: Package.version,
        },
      }
    }
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