'use strict';

const UsersController = require('../../interfaces/controllers/UsersController');
const usersController = new UsersController();

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: (request, h) => usersController.listUsers(request)
  },
  {
    method: 'POST',
    path: '/users',
    handler: (request, h) => usersController.createUser(request)
  }
];