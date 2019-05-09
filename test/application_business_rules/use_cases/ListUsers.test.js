const UserRepository = require('../../../lib/application_business_rules/repositories/UserRepository');
const mockUserRepository = new UserRepository();
const ListUsers = require('../../../lib/application_business_rules/use_cases/ListUsers');

test('should resolve with all the users persisted in repository', async () => {
  // given
  mockUserRepository.find = () => ['John', 'Jane'];

  // when
  const users = await ListUsers({ userRepository: mockUserRepository });

  // then
  expect(users).toEqual(['John', 'Jane']);
});
