'use strict';

const Hapi = require('hapi');
const Blipp = require('blipp');

// Create a server with a host and port
const server = Hapi.server({
  port: process.env.PORT || 3000
});

// Add the route
server.route(require('./lib/interface_adapters/routes'));

// Start the server
const start = async () => {

  await server.register(Blipp);

  try {
    await server.start();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();