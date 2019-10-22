'use strict';

const SayHello = require('../../application_business_rules/use_cases/SayHello');

module.exports = {

  sayHelloWorld() {

    return SayHello();
  },

  sayHelloPerson(request) {

    return SayHello(request.params.name);
  },

};