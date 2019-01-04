process.env.NODE_CONFIG_DIR = require('path').resolve('./src/infrastructure/config/');

const Hapi = require('hapi');
const config = require('config');

const blipp = require('blipp');
const oauthPlugin = require('./plugins/oauth');
const routes = require('./routes');

const createServer = async () => {
  // Create a server with a host and port
  const hapiConfig = JSON.parse(JSON.stringify(config.get('webserver.hapi')));
  const server = Hapi.server(hapiConfig);

  // Register plugins
  await server.register([
    blipp,
    oauthPlugin,
  ]);

  // Add the routes
  server.route(routes);

  return server;
};

module.exports = createServer;
