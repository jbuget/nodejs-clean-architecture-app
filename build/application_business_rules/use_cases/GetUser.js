'use strict';
module.exports = (userId, { userRepository }) => {
    return userRepository.get(userId);
};
//# sourceMappingURL=GetUser.js.map