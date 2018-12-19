'use strict';

const UsersController = require('../../../interfaces/controllers/UsersController');
const usersController = new UsersController();

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: (request) => usersController.findUsers(request)
  },
  {
    method: 'POST',
    path: '/users',
    handler: (request) => usersController.createUser(request)
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: (request) => usersController.getUser(request)
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: (request, h) => usersController.deleteUser(request, h)
  },
];