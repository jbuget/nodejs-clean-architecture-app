'use strict';

const Boom = require('@hapi/boom');
const GetDatapoints = require('../../application_business_rules/use_cases/GetDatapoints');
const DatapointsRepository = require('../../application_business_rules/repositories/DatapointsRepository');
const DatapointsRepositoryInMemory = require('../storage/DatapointsRepositoryInMemory');
const datapointsRepository = new DatapointsRepository(new DatapointsRepositoryInMemory());

module.exports = {

  async GetDatapoints(request) {
    // Input
    const query = request.payload;

    // Treatment
    const pointsArray = await GetDatapoints(query, { datapointsRepository });

    // Output
    if (!pointsArray) {
      return Boom.notFound();
    }

    // Output
    return pointsArray;
  }

};
