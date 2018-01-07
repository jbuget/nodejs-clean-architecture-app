'use strict';

const Promise = require('bluebird');

module.exports = class {

  execute() {
    return Promise.resolve(true);
  }
};