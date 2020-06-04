'use strict';

const User = require('../../../domain/accounts/User');

module.exports = async (firstName, lastName, email, password, { userRepository }) => {
  const user = new User(null, firstName, lastName, email, password, 'DEACTIVATED');
  return userRepository.persist(user);
};
