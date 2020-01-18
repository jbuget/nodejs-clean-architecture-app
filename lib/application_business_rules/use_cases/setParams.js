'use strict';

const Datapoints = require('../../enterprise_business_rules/models/Datapoints');

module.exports = (session, key, value) => {
  session[key] = value;
};
