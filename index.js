'use strict';

// Create a server with a host and port
const createServer = require('./lib/technical_drivers/server');

// Start the server
const start = async () => {

  try {
    const server = await createServer();
    await server.start();

    console.log('Server running at:', server.info.uri);
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();