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
const sequelize = require('../../frameworks_drivers/database/sequelize');
const User = require('../../enterprise_business_rules/entities/User');
module.exports = class {
    constructor() {
        this.db = sequelize;
        this.model = this.db.model('user');
    }
    persist(userEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, email, password } = userEntity;
            const seqUser = yield this.model.create({ firstName, lastName, email, password });
            yield seqUser.save();
            return new User(seqUser.id, seqUser.firstName, seqUser.lastName, seqUser.email, seqUser.password);
        });
    }
    merge(userEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            const seqUser = yield this.model.findByPk(userEntity.id);
            if (!seqUser)
                return false;
            const { firstName, lastName, email, password } = userEntity;
            yield seqUser.update({ firstName, lastName, email, password });
            return new User(seqUser.id, seqUser.firstName, seqUser.lastName, seqUser.email, seqUser.password);
        });
    }
    remove(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const seqUser = yield this.model.findByPk(userId);
            if (seqUser) {
                return seqUser.destroy();
            }
            return false;
        });
    }
    get(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const seqUser = yield this.model.findByPk(userId);
            return new User(seqUser.id, seqUser.firstName, seqUser.lastName, seqUser.email, seqUser.password);
        });
    }
    getByEmail(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            const seqUser = yield this.model.findOne({ where: { email: userEmail } });
            return new User(seqUser.id, seqUser.firstName, seqUser.lastName, seqUser.email, seqUser.password);
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const seqUsers = yield this.model.findAll();
            return seqUsers.map((seqUser) => {
                return new User(seqUser.id, seqUser.firstName, seqUser.lastName, seqUser.email, seqUser.password);
            });
        });
    }
};
//# sourceMappingURL=UserRepositorySQLite.js.map