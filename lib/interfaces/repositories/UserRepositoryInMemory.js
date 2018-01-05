'use strict';

const User = require('../../domain/User');
const UserRepository = require('../../domain/UserRepository');

module.exports = class extends UserRepository {

  _initializeRepositoryWithTwoUsers() {
    const john = new User(null, 'John', 'Doe', 'john.doe@mail.com', 'ABCD1234');
    const jane = new User(null, 'Jane', 'Smith', 'jane.smith@mail.com', 'EFGH5678');
    this.persist(john);
    this.persist(jane);
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
    return row;
  }

  merge(userEntity) {
    let row = this.data[userEntity.id];
    Object.assign(row, userEntity);
    return row;
  }

  remove(userId) {
    delete this.data[userId];
  }

  get(userId) {
    return this.data[userId];
  }

  find() {
    return Object.keys(this.data).map(key => this.data[key]);
  }

};