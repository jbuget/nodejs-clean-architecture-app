'use strict';

module.exports = async ({ itemId, username, password, website }, { itemRepository }) => {
  let item = await itemRepository.get(itemId);
  if (username) item.username = username;
  if (password) item.password = password;
  if (website) item.website = website;
  return itemRepository.updateConnectionItem(item);
};
