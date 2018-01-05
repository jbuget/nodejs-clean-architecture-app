'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/hello',
    handler: (request, h) => {

      return 'hello world!';
    }
  },
  {
    method: 'GET',
    path: '/hello/{id}',
    handler: (request, h) => {

      return `hello ${request.params.id}!`;
    }
  }
];