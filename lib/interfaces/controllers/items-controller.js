'use strict';

const addItem = require('../../application/use_cases/items/add-item');
const editItem = require('../../application/use_cases/items/edit-item');
const getItem = require('../../application/use_cases/items/get-item');
const getUserItems = require('../../application/use_cases/items/get-user-items');
const removeItem = require('../../application/use_cases/items/remove-item');

module.exports = {

  async getItems(request, h) {

    // Context
    const { environment, serviceLocator } = request.server.app;

    // Input
    const input = { userId: request.auth.credentials.uid };

    // Treatment
    const items = await getUserItems(input, serviceLocator);

    // Output
    return items.map(item => {
      return {
        id: item.id,
        object: 'item',
        data: {
          'type': item.type,
          'username': item.username,
          'password': item.password,
          'website': item.website,
        },
        links: {
          'self': `${environment.server.url}/user/items/${item.id}`,
        }
      };
    });
  },

  async addItem(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const input = {
      ownerId: request.auth.credentials.uid,
      type: request.payload.type.toUpperCase(),
      username: request.payload.username,
      password: request.payload.password,
      website: request.payload.website,
    };

    // Treatment
    await addItem(input, serviceLocator);

    // Output
    return h.response().created();
  },

  async getItemDetails(request, h) {

    // Context
    const { environment, serviceLocator } = request.server.app;

    // Input
    const input = { itemId: request.params.id };

    // Treatment
    const item = await getItem(input, serviceLocator);

    // Output
    return {
      id: item.id,
      object: 'item',
      data: {
        'type': item.type,
        'username': item.username,
        'password': item.password,
        'website': item.website,
      },
      links: {
        'self': `${environment.server.url}/user/items/${item.id}`,
      }
    };
  },

  async editItem(request, h) {

    // Context
    const { environment, serviceLocator } = request.server.app;

    // Input
    const input = {
      itemId: request.params.id,
      username: request.payload.username,
      password: request.payload.password,
      website: request.payload.website,
    };

    // Treatment
    const item = await editItem(input, serviceLocator);

    // Output
    return {
      id: item.id,
      object: 'item',
      data: {
        'type': item.type,
        'username': item.username,
        'password': item.password,
        'website': item.website,
      },
      links: {
        'self': `${environment.server.url}/user/items/${item.id}`,
      }
    };
  },

  async removeItem(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const input = { itemId: request.params.id };

    // Treatment
    await removeItem(input, serviceLocator);

    // Output
    return h.response();
  },

};
