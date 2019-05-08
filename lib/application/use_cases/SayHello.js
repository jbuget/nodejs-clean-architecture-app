'use strict';

module.exports = class {

  execute(name) {
    const message = name ? `Hello ${name}!` : 'Hello world!';
    return Promise.resolve(message);
  }
};