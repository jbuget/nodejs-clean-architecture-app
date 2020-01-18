'use strict';

const Boom = require('@hapi/boom');
const SetParams = require('../../application_business_rules/use_cases/SetParams');

module.exports = {

  async setParams(request) {
    // Input
    const key = request.query.key;
    const value = request.query.value;
    let keyvalue = {};
    keyvalue[key] = value;

    // Treatment
     request.yar.set('params', keyvalue);
  }

};
