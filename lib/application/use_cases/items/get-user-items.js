'use strict';

module.exports = ({ ownerId }, { itemRepository }) => {
  return itemRepository.findByOwner(ownerId);
};
