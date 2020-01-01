'use strict';

const Datapoints = require('../../enterprise_business_rules/models/Datapoints');

module.exports = (query, { datapointsRepository }) => {
  return datapointsRepository.resolveQuery(query);
};
