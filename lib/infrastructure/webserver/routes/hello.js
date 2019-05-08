'use strict';

const HelloController = require('../../../interfaces/controllers/HelloController');
const helloController = new HelloController();

module.exports = [
  {
    method: 'GET',
    path: '/hello',
    handler: helloController.sayHelloWorld
  },
  {
    method: 'GET',
    path: '/hello/{name}',
    handler: helloController.sayHelloPerson
  }
];