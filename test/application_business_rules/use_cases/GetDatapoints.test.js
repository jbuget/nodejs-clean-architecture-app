const User = require('../../../lib/enterprise_business_rules/entities/User');
const DatapointsRepository = require('../../../lib/application_business_rules/repositories/DatapointsRepository');
const getDatapoints = require('../../application_business_rules/use_cases/getDatapoints');
const testQuery = require('../../data/searchQueryResolverTestQuery.js');
const testDatapoints = require('../../data/searchQueryResolverTestQuery.js');

test('Should resolve query to get a datapoints object with history mapping to query request', async () => {
  // given
  const testQuery = require('../../data/searchQueryResolverTestQuery.js');
  const testDatapoints = require('../../data/searchQueryResolverTestQuery.js');
  mockUserRepository.resolve = jest.fn(() => testDatapoints);
  // when
  const datapoints = await GetDatapoints(testQuery, { datapointsRepository: mockDatapointsRepository });
  // then
  expect(mockDatapointsRepository.resolve).toHaveBeenCalledWith(testQuery);
  expect(datapoints).toEqual(testDatapoints);
});
