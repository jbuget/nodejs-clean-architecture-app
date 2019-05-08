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
    require('./plugins/oauth'),
    require('./plugins/hello'),
    require('./plugins/private'),
    require('./plugins/users'),
  ]);

  return server;
};

module.exports = createServer;