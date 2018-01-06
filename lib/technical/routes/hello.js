'use strict';

const HelloController = require('../../interfaces/controllers/HelloController');
const helloController = new HelloController();

module.exports = [
  {
    method: 'GET',
    path: '/hello',
    handler: (request) => helloController.sayHelloWorld(request)
  },
  {
    method: 'GET',
    path: '/hello/{name}',
    handler: (request) => helloController.sayHelloPerson(request)
  }
];