'use strict';

const Datapoints = require('../../enterprise_business_rules/entities/Datapoints');

module.exports = class {

  constructor(data) {
    this.data = data;
  }

  async resolveQuery(query) {
    var pointArrays = query.map((topic) => this.data[topic]);
    return new Datapoints(pointArrays);
  }

};
