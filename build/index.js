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
// Create a server with a host and port
const sequelize = require('./frameworks_drivers/database/sequelize');
const createServer = require('./frameworks_drivers/webserver/server');
// Start the server
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.sync();
        console.log('Connection to DB has been established successfully.');
    }
    catch (err) {
        console.error('Unable to connect to the database:', err);
    }
    try {
        const server = yield createServer();
        yield server.start();
        console.log('Server running at:', server.info.uri);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
});
start();
//# sourceMappingURL=index.js.map