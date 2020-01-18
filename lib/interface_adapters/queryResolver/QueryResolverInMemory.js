'use strict';

const Datapoints = require('../../enterprise_business_rules/models/Datapoints');

module.exports = class {

  constructor(data) {
    this.data = data;
  }

  async resolveQuery(query) {
    var pointArrays = this.data[query.phrase];
    return new Datapoints(pointArrays);
  }

};
