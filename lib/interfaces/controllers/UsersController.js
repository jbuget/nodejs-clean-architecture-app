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
    const useCase = new CreateUser(userRepository);
    const user = await useCase.execute(firstName, lastName, email, password);

    // Output
    const userSerializer = new UserSerializer();
    return userSerializer.serialize(user);
  },

  async findUsers() {

    // Treatment
    const userRepository = new UserRepositoryInMemory();
    const useCase = new ListUsers(userRepository);
    const users = await useCase.execute();

    // Output
    const userSerializer = new UserSerializer();
    return users.map(userSerializer.serialize)
  },

  async getUser(request) {

    // Input
    const userId = request.params.id;

    // Treatment
    const userRepository = new UserRepositoryInMemory();
    const useCase = new GetUser(userRepository);
    const user = await useCase.execute(userId);

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
    const useCase = new DeleteUser(userRepository);
    await useCase.execute(userId);

    // Output
    return h.response().code(204);
  },

};
