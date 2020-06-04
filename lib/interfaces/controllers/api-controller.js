'use strict';

const sayHello = require('../../application/use_cases/say-hello');

module.exports = {

  getInfo() {
    const environment = process.env.NODE_ENV || 'development';
    const host = process.env.HOST || 'http://localhost:3000';

    return {
      environment,
      host,
      routes: {
        root: `${host}/`,
        accounts: `${host}/accounts`,
        oauth: {
          token: `${host}/oauth/token`,
        },
        user: {
          items: `${host}/user/items`
        },
      }
    };
  },

};