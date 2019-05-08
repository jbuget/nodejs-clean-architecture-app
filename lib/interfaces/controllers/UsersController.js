'use strict';

const Boom = require('boom');
const UserSerializer = require('../serializers/UserSerializer');
const ListUsers = require('../../application/use_cases/ListUsers');
const CreateUser = require('../../application/use_cases/CreateUser');
const GetUser = require('../../application/use_cases/GetUser');
const DeleteUser = require('../../application/use_cases/DeleteUser');
const UserRepositoryInMemory = require('../storage/UserRepositoryInMemory');

module.exports = {

  async createUser(request) {

    // Input
    const { firstName, lastName, email, password } = request.payload;

    // Treatment
    const userRepository = new UserRepositoryInMemory();
    const user = await CreateUser(firstName, lastName, email, password, userRepository);

    // Output
    const userSerializer = new UserSerializer();
    return userSerializer.serialize(user);
  },

  async findUsers() {

    // Treatment
    const userRepository = new UserRepositoryInMemory();
    const users = await ListUsers(userRepository);

    // Output
    const userSerializer = new UserSerializer();
    return users.map(userSerializer.serialize)
  },

  async getUser(request) {

    // Input
    const userId = request.params.id;

    // Treatment
    const userRepository = new UserRepositoryInMemory();
    const user = await GetUser(userId, userRepository);

    // Output
    if (!user) {
      return Boom.notFound();
    }
    const userSerializer = new UserSerializer();
    return userSerializer.serialize(user);
  },

  async deleteUser(request, h) {

    // Input
    const userId = request.params.id;

    // Treatment
    const userRepository = new UserRepositoryInMemory();
    await DeleteUser(userId, userRepository);

    // Output
    return h.response().code(204);
  },

};
