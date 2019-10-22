'use strict';
const AuthorizationController = require('../../../interface_adapters/controllers/AuthorizationController');
module.exports = () => {
    return {
        authenticate: AuthorizationController.verifyAccessToken
    };
};
//# sourceMappingURL=scheme.js.map