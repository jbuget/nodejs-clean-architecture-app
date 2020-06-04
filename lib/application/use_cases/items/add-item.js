'use strict';

const { types } = require('../../../domain/items/Item');
const ConnectionItem = require('../../../domain/items/LoginItem');
const PasswordItem = require('../../../domain/items/PasswordItem');

module.exports = ({ ownerId, type, username, password, website }, { itemRepository }) => {
  let item;

  switch (type) {
    case types.LOGIN:
      item = new ConnectionItem({ ownerId, username, password, website });
      break;
    case types.PASSWORD:
      item = new PasswordItem({ ownerId, password });
      break;
    default:
      throw new Error('Unknown secret item type');
  }

  return itemRepository.persist(item);
};
