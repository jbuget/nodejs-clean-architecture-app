'use strict';

const qrDriver = require('../../frameworks_drivers/queryResolver/qrDriver');
const Datapoints = require('../../enterprise_business_rules/models/Datapoints');
const Boom = require('@hapi/boom');

module.exports = class {

  constructor() {
    this.queryResolver = qrDriver;
  }

  async resolveQuery(query) {
    const pointArrays = {};
    const queryResponse = await this.queryResolver.resolve(query)
    queryResponse.map((pointArray) => {
      pointArrays[pointArray.phrase] = pointArray.data;
    });
    return new Datapoints(pointArrays);
  }

};
