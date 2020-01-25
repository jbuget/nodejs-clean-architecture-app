'use strict';

const Boom = require('@hapi/boom');
const GetDatapoints = require('../../application_business_rules/use_cases/GetDatapoints.js');
const DatapointsRepository = require('../../application_business_rules/repositories/DatapointsRepository');
const QueryResolverES = require('../queryResolver/QueryResolverES');
const qrDriver = require('../../frameworks_drivers/queryResolver/qrDriver');
const datapointsRepository = new DatapointsRepository(new QueryResolverES(qrDriver));

module.exports = {

  async getDatapoints(request) {
    // Treatment
    const pointsArray = GetDatapoints(request.payload, {
      datapointsRepository
    });

    // Output
    if (!pointsArray) {
      return Boom.notFound();
    }

    // Output
    return pointsArray;
  }

};
