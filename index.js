'use strict';

require('dotenv').config()

// Create a server with a host and port
const qrDriver = require('./lib/frameworks_drivers/queryResolver/qrDriver');
const createServer = require('./lib/frameworks_drivers/webserver/server');

// Start the server
const start = async () => {

  try {

    //await qrDriver.sync();
    console.log('Connection to DB has been established successfully.');

  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }

  try {
    const server = await createServer();
    await server.start();

    console.log('Server running at:', server.info.uri);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
