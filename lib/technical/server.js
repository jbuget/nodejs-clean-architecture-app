'use strict';

const Hapi = require('hapi');
const Blipp = require('blipp');

const createServer = async () => {

  // Create a server with a host and port
  const server = Hapi.server({
    port: process.env.PORT || 3000
  });

  // Register plugins
  await server.register(Blipp);

  // Add the routes
  server.route(require('./routes'));

  return server;
};

module.exports = createServer;