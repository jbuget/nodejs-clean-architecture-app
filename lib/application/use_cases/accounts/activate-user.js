'use strict';

const User = require('../../../domain/accounts/User');

module.exports = async (userId, { userRepository }) => {
  const user = await userRepository.get(userId);
  user.activate();
  return userRepository.merge(user);
};
