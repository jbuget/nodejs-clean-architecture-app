'use strict';

const SayHello = require('../../application/use_cases/SayHello');

module.exports = {

  sayHelloWorld() {

    // Treatment
    const useCase = new SayHello();

    // Output
    return useCase.execute();
  },

  sayHelloPerson(request) {

    // Input
    const name = request.params.name;

    // Treatment
    const useCase = new SayHello();

    // Output
    return useCase.execute(name);
  },

};