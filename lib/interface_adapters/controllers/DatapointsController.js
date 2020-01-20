'use strict';

const Boom = require('@hapi/boom');
const GetDatapoints = require('../../application_business_rules/use_cases/GetDatapoints');
const DatapointsRepository = require('../../application_business_rules/repositories/DatapointsRepository');
const DatapointsRepositoryInMemory = require('../queryResolver/QueryResolverInMemory');
const mockDatapoints = require('../../../test/data/searchQueryResolverTestResponse');
const datapointsRepository = new DatapointsRepository(new DatapointsRepositoryInMemory(mockDatapoints));

module.exports = {

  async getDatapoints(request) {
    // Treatment
    const pointsArray = await GetDatapoints(request.query, {
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
