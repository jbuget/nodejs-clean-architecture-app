'use strict';

module.exports = ({ itemId }, { itemRepository }) => {
  return itemRepository.remove(itemId);
};
