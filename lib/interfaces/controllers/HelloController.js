'use strict';

const SayHello = require('../../features/SayHello');

module.exports = class {

  sayHelloWorld() {
    const useCase = new SayHello();
    return useCase.execute();
  }

  sayHelloPerson(request) {
    const name = request.params.id;
    const useCase = new SayHello();
    return useCase.execute(name);
  }

};