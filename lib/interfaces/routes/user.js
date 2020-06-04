'use strict';

const itemsController = require('../controllers/items-controller');
const userController = require('../controllers/user-controller');

module.exports = {
  name: 'users',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'GET',
        path: '/user',
        handler: userController.getInfo,
        options: {
          auth: 'oauth-jwt',
          description: 'Get connected user information',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/user/items',
        handler: itemsController.getItems,
        options: {
          auth: 'oauth-jwt',
          description: 'Get connected user secured items',
          tags: ['api'],
        },
      },
      {
        method: 'POST',
        path: '/user/items',
        handler: itemsController.addItem,
        options: {
          auth: 'oauth-jwt',
          description: 'Add a new item',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/user/items/{id}',
        handler: itemsController.getItemDetails,
        options: {
          auth: 'oauth-jwt',
          description: 'Get the connected user item details',
          tags: ['api'],
        },
      },
      {
        method: 'PATCH',
        path: '/user/items/{id}',
        handler: itemsController.editItem,
        options: {
          auth: 'oauth-jwt',
          description: 'Edit an existing item',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/user/items/{id}',
        handler: itemsController.removeItem,
        options: {
          auth: 'oauth-jwt',
          description: 'Add a new item',
          tags: ['api'],
        },
      },
    ]);
  }
};