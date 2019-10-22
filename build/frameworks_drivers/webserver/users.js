'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const UsersController = require('../../interface_adapters/controllers/UsersController');
module.exports = {
    name: 'users',
    version: '1.0.0',
    register: (server) => __awaiter(void 0, void 0, void 0, function* () {
        server.route([
            {
                method: 'GET',
                path: '/users',
                handler: UsersController.findUsers,
                options: {
                    description: 'List all users',
                    tags: ['api'],
                },
            },
            {
                method: 'POST',
                path: '/users',
                handler: UsersController.createUser,
                options: {
                    description: 'Create a user',
                    tags: ['api'],
                },
            },
            {
                method: 'GET',
                path: '/users/{id}',
                handler: UsersController.getUser,
                options: {
                    description: 'Get a user by its {id}',
                    tags: ['api'],
                },
            },
            {
                method: 'DELETE',
                path: '/users/{id}',
                handler: UsersController.deleteUser,
                options: {
                    description: 'Delete a user',
                    tags: ['api'],
                },
            },
        ]);
    })
};
//# sourceMappingURL=users.js.map