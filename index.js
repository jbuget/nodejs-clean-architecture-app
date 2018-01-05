'use strict';

const Hapi = require('hapi');
const Blipp = require('blipp');

// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: 3000
});

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, h) => {

    return 'hello world!';
  }
});

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