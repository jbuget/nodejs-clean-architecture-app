'use strict';

const UsersController = require('../../interfaces/controllers/UsersController');

module.exports = {
  name: 'users',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'GET',
        path: '/users',
        handler: UsersController.findUsers
      },
      {
        method: 'POST',
        path: '/users',
        handler: UsersController.createUser
      },
      {
        method: 'GET',
        path: '/users/{id}',
        handler: UsersController.getUser
      },
      {
        method: 'DELETE',
        path: '/users/{id}',
        handler: UsersController.deleteUser
      },
    ]);
  }
};