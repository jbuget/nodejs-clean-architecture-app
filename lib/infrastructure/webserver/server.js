'use strict';

const Hapi = require('hapi');

const createServer = async () => {

  // Create a server with a host and port
  const server = Hapi.server({
    port: process.env.PORT || 3000
  });

  // Register plugins
  await server.register([
    require('blipp'),
    require('./oauth'),
    require('./hello'),
    require('./private'),
    require('./users'),
  ]);

  return server;
};

module.exports = createServer;