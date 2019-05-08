'use strict';

const HelloController = require('../../../interfaces/controllers/HelloController');

module.exports = {
  name: 'hello',
  version: '1.0.0',
  register: async function (server) {

    server.route([
      {
        method: 'GET',
        path: '/hello',
        handler: HelloController.sayHelloWorld
      },
      {
        method: 'GET',
        path: '/hello/{name}',
        handler: HelloController.sayHelloPerson
      }
    ]);
  }
};