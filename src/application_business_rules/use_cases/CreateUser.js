'use strict';

const User = require('../../enterprise_business_rules/entities/User');

module.exports = (firstName, lastName, email, password, { userRepository }) => {
  const user = new User(null, firstName, lastName, email, password);
  return userRepository.persist(user);
};
