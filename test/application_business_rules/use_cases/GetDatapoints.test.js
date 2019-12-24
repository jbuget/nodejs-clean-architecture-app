const User = require('../../../lib/enterprise_business_rules/entities/User');
const DatapointsRepository = require('../../../lib/application_business_rules/repositories/UserRepository');
const mockDatapointsRepository = new DatapointsRepository();
const getDatapoints = require('../../../lib/application_business_rules/use_cases/getDatapoints');

test('Should resolve query to get a datapoints object with history mapping to query request', async () => {
  // given
  expectedDatapoints = {

  }
  const query = {

  }
  // when
  const datapoints = await getDatapoints(query, { userRepository: mockDatapointsRepository });

  // then
  expect(mockDatapointsRepository.resolve).toHaveBeenCalledWith(new User(null, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD'));
  expect(datapoints).toEqual(expectedDatapoints);
});
