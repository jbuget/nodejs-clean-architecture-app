'use strict';

const UserSerializer = require('../serializers/UserSerializer');
const ListUsers = require('../../application/use_cases/ListUsers');
const CreateUser = require('../../application/use_cases/CreateUser');
const GetUser = require('../../application/use_cases/GetUser');
const DeleteUser = require('../../application/use_cases/DeleteUser');
const UserRepositoryInMemory = require('../storage/UserRepositoryInMemory');

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
