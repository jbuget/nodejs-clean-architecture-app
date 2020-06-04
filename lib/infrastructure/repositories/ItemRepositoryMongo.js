'use strict';

const Item = require('../../domain/items/Item');
const MongooseItem = require('../orm/mongoose/schemas/Item');
const ItemRepository = require('../../domain/items/ItemRepository');

function mongooseToDomain(mongooseItem) {
  return new Item({
    id: mongooseItem.id,
    ownerId: mongooseItem.ownerId,
    type: mongooseItem.type,
    username: mongooseItem.username,
    password: mongooseItem.password,
    website: mongooseItem.website,
    creationDate: mongooseItem.creationDate,
    updateDate: mongooseItem.updateDate
  });
}

module.exports = class extends ItemRepository {

  async persist(item) {
    // Input
    const { ownerId, type, username, password, website } = item;

    // Treatment
    const mongooseItem = new MongooseItem({ ownerId, type, username, password, website });
    await mongooseItem.save();

    // Output
    return mongooseToDomain(mongooseItem);
  }

  async updateConnectionItem(item) {
    // Input
    const { username, password, website } = item;

    // Treatment
    const updateDate = new Date();
    const mongooseItem = await MongooseItem.findByIdAndUpdate(item.id, { username, password, website, updateDate }, { new: true});

    // Output
    return mongooseToDomain(mongooseItem);
  }

  async remove(itemId) {
    // Treatment
    return MongooseItem.findByIdAndDelete(itemId);
  }

  async get(itemId) {
    // Treatment
    const mongooseItem = await MongooseItem.findById(itemId);

    // Output
    return mongooseToDomain(mongooseItem);
  }

  async findByOwner(ownerId) {
    // Treatment
    const mongooseItems = await MongooseItem.find({ ownerId });

    // Output
    return mongooseItems.map(mongooseToDomain);
  }

};
