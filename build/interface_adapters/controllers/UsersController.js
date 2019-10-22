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
const Boom = require('@hapi/boom');
const UserSerializer = require('../serializers/UserSerializer');
const ListUsers = require('../../application_business_rules/use_cases/ListUsers');
const CreateUser = require('../../application_business_rules/use_cases/CreateUser');
const GetUser = require('../../application_business_rules/use_cases/GetUser');
const DeleteUser = require('../../application_business_rules/use_cases/DeleteUser');
const UserRepository = require('../../application_business_rules/repositories/UserRepository');
const UserRepositoryInMemory = require('../storage/UserRepositoryInMemory');
const userRepository = new UserRepository(new UserRepositoryInMemory());
/*
const UserRepositorySQLite = require('../storage/UserRepositorySQLite');
const userRepository = new UserRepository(new UserRepositorySQLite());
*/
module.exports = {
    createUser(request) {
        return __awaiter(this, void 0, void 0, function* () {
            // Input
            const { firstName, lastName, email, password } = request.payload;
            // Treatment
            const user = yield CreateUser(firstName, lastName, email, password, { userRepository });
            // Output
            const userSerializer = new UserSerializer();
            return userSerializer.serialize(user);
        });
    },
    findUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            // Treatment
            const users = yield ListUsers({ userRepository });
            // Output
            const userSerializer = new UserSerializer();
            return users.map(userSerializer.serialize);
        });
    },
    getUser(request) {
        return __awaiter(this, void 0, void 0, function* () {
            // Input
            const userId = request.params.id;
            // Treatment
            const user = yield GetUser(userId, { userRepository });
            // Output
            if (!user) {
                return Boom.notFound();
            }
            const userSerializer = new UserSerializer();
            return userSerializer.serialize(user);
        });
    },
    deleteUser(request, h) {
        return __awaiter(this, void 0, void 0, function* () {
            // Input
            const userId = request.params.id;
            // Treatment
            yield DeleteUser(userId, { userRepository });
            // Output
            return h.response().code(204);
        });
    },
};
//# sourceMappingURL=UsersController.js.map