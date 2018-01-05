'use strict';

const UserSerializer = require('../serializers/UserSerializer');
const ListUsers = require('../../features/ListUsers');
const CreateUser = require('../../features/CreateUser');
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory');

module.exports = class {

  constructor() {
    this.userSerializer = new UserSerializer();
    this.userRepository = new UserRepositoryInMemory();
  }

  createUser(request) {
    const { firstName, lastName, email, password } = request.payload;
    const useCase = new CreateUser(this.userRepository);
    const user = useCase.execute(firstName, lastName, email, password);
    return this.userSerializer.serialize(user);
  }

  listUsers(request) {
    const useCase = new ListUsers(this.userRepository);
    return useCase.execute().map(this.userSerializer.serialize);
  }

};
