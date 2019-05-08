'use strict';

const UsersController = require('../../../interfaces/controllers/UsersController');
const usersController = new UsersController();

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: usersController.findUsers
  },
  {
    method: 'POST',
    path: '/users',
    handler: usersController.createUser
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: usersController.getUser
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: usersController.deleteUser
  },
];