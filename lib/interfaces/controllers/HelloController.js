'use strict';

module.exports = class {

  _sayHello(name) {
    return name ? `Hello ${name}!` : 'Hello world!';
  }

  sayHelloWorld(request) {
    return this._sayHello();
  }

  sayHelloPerson(request) {
    const name = request.params.id;
    return this._sayHello(name);
  }

};