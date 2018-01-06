'use strict';

const SayHello = require('../../application/use_cases/SayHello');

module.exports = class {

  constructor() {
    this.useCase = new SayHello();
  }

  sayHelloWorld() {
    return this.useCase.execute();
  }

  sayHelloPerson(request) {
    const name = request.params.name;
    return this.useCase.execute(name);
  }

};