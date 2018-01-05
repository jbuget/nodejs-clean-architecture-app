'use strict';

const UserSerializer = require('../serializers/UserSerializer');
const ListUsers = require('../../features/ListUsers');
const CreateUser = require('../../features/CreateUser');
const GetUser = require('../../features/GetUser');
const DeleteUser = require('../../features/DeleteUser');
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory');

module.exports = class {

  constructor() {
    this.userSerializer = new UserSerializer();
    this.userRepository = new UserRepositoryInMemory();
  }

  createUser(request) {
    const { firstName, lastName, email, password } = request.payload;
    const useCase = new CreateUser(this.userRepository);
    return useCase.execute(firstName, lastName, email, password)
      .then(user => this.userSerializer.serialize(user));
  }

  findUsers() {
    const useCase = new ListUsers(this.userRepository);
    return useCase.execute()
      .then(users => users.map(this.userSerializer.serialize));
  }

  getUser(request) {
    const userId = request.params.id;
    const useCase = new GetUser(this.userRepository);
    return useCase.execute(userId)
      .then(user => this.userSerializer.serialize(user));
  }

  deleteUser(request, h) {
    const userId = request.params.id;
    const useCase = new DeleteUser(this.userRepository);
    return useCase.execute(userId).then(() => h.response().code(204));
  }

};
