process.env.NODE_CONFIG_DIR = require('path').resolve('./src/infrastructure/config/');

const Hapi = require('hapi');
const config = require('config');

const createServer = async () => {
  // Create a server with a host and port
  const hapiConfig = JSON.parse(JSON.stringify(config.get('webserver.hapi')));
  const server = Hapi.server(hapiConfig);

  // Register plugins
  await server.register([
    require('blipp'),
    require('./plugins/oauth'),
  ]);

  // Add the routes
  server.route(require('./routes'));

  return server;
};

module.exports = createServer;
