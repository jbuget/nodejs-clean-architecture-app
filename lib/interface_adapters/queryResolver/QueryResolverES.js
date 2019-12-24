'use strict';

const qrDriver = require('../../frameworks_drivers/queryResolver/qrDriver');
const Datapoints = require('../../enterprise_business_rules/entities/Datapoints');

module.exports = class {

  constructor() {
    this.queryResolver = qrDriver;
  }

  async resolveQuery(query) {
    var pointArrays = this.queryResolver.resolve(query)
    return new Datapoints(pointArrays);
  }

};
