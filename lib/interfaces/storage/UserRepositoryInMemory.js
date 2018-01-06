'use strict';

const Promise = require('bluebird');
const User = require('../../domain/entities/User');
const UserRepository = require('../../application/repositories/UserRepository');

module.exports = class extends UserRepository {

  _initializeRepositoryWithTwoUsers() {
    const john = new User(null, 'John', 'Doe', 'john.doe@mail.com', 'ABCD1234');
    const jane = new User(null, 'Jane', 'Smith', 'jane.smith@mail.com', 'EFGH5678');
    this.persist(john).then(() => this.persist(jane));
  }

  constructor() {
    super();
    this.index = 1;
    this.data = {};
    this._initializeRepositoryWithTwoUsers();
  }

  persist(userEntity) {
    const row = Object.assign({}, userEntity);
    const rowId = this.index++;
    row.id = rowId;
    this.data[rowId] = row;
    return Promise.resolve(row);
  }

  merge(userEntity) {
    let row = this.data[userEntity.id];
    Object.assign(row, userEntity);
    return Promise.resolve(row);
  }

  remove(userId) {
    delete this.data[userId];
    return Promise.resolve();
  }

  get(userId) {
    return Promise.resolve(this.data[userId]);
  }

  find() {
    return Promise.resolve(Object.keys(this.data).map(key => this.data[key]));
  }

};