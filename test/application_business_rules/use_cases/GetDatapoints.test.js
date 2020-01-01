const Datapoints = require('../../../lib/enterprise_business_rules/models/Datapoints');
const DatapointsRepository = require('../../../lib/application_business_rules/repositories/DatapointsRepository');
const GetDatapoints = require('../../../lib/application_business_rules/use_cases/getDatapoints');

test('Should resolve query to get a datapoints object with history mapping to query request', async () => {
  // given
  const mockDatapointsRepository = new DatapointsRepository();
  const testQuery = require('../../data/searchQueryResolverTestQuery.js');
  const testPointArrays = require('../../data/searchQueryResolverTestQuery.js');
  const testDatapoints =  new Datapoints(testPointArrays);

  mockDatapointsRepository.resolveQuery = jest.fn(() => testDatapoints);
  // when
  const datapoints = await GetDatapoints(testQuery, { datapointsRepository: mockDatapointsRepository });
  // then
  expect(mockDatapointsRepository.resolveQuery).toHaveBeenCalledWith(testQuery);
  expect(datapoints).toEqual(testDatapoints);
});
