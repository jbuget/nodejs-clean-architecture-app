'use strict';

module.exports = ({ itemId }, { itemRepository }) => {
  return itemRepository.get(itemId);
};
