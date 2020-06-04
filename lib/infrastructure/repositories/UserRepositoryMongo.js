'use strict';

const User = require('../../domain/accounts/User');
const UserRepository = require('../../domain/accounts/UserRepository');

module.exports = class extends UserRepository {

  constructor() {
    super();
  }

  async persist(userEntity) {
    const { firstName, lastName, email, password, status } = userEntity;
    const mongooseUser = new MongooseUser({ firstName, lastName, email, password, status });
    await mongooseUser.save();
    return new User(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email, mongooseUser.password, mongooseUser.status);
  }

  async merge(userEntity) {
    const { id, firstName, lastName, email, password, status } = userEntity;
    const mongooseUser = MongooseUser.findByIdAndUpdate(id, { firstName, lastName, email, password, status });
    return new User(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email, mongooseUser.password, mongooseUser.status);
  }

  async remove(userId) {
    return MongooseUser.findOneAndDelete(userId);
  }

  async get(userId) {
    const mongooseUser = await MongooseUser.findById(userId);
    return new User(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email, mongooseUser.password, mongooseUser.status);
  }

  async getByEmail(userEmail) {
    const mongooseUser = await MongooseUser.find({ email: userEmail });
    return new User(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email, mongooseUser.password, mongooseUser.status);
  }

  async find() {
    const mongooseUsers = await MongooseUser.find();
    return mongooseUsers.map((mongooseUser) => {
      return new User(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email, mongooseUser.password, mongooseUser.status);
    });
  }

};
