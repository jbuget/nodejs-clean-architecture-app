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
const Hapi = require('@hapi/hapi');
const Package = require('../../../package');
const createServer = () => __awaiter(void 0, void 0, void 0, function* () {
    // Create a server with a host and port
    const server = Hapi.server({
        port: process.env.PORT || 3000
    });
    // Register vendors plugins
    yield server.register([
        require('blipp'),
        require('@hapi/inert'),
        require('@hapi/vision'),
        {
            plugin: require('@hapi/good'),
            options: {
                ops: {
                    interval: 1000 * 60
                },
                reporters: {
                    myConsoleReporter: [
                        {
                            module: '@hapi/good-squeeze',
                            name: 'Squeeze',
                            args: [{ ops: '*', log: '*', error: '*', response: '*' }]
                        },
                        {
                            module: '@hapi/good-console'
                        },
                        'stdout'
                    ]
                }
            },
        },
    ]);
    // Register custom plugins
    yield server.register([
        require('./oauth'),
        require('./hello'),
        require('./private'),
        require('./users'),
    ]);
    return server;
});
module.exports = createServer;
//# sourceMappingURL=server.js.map