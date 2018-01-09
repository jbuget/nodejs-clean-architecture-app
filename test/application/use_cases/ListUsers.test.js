const Promise = require('bluebird');

const UserRepository = require('../../../lib/application/repositories/UserRepository');
const MockUserRepository = class extends UserRepository {};
const mockUserRepository = new MockUserRepository();

const ListUsers = require('../../../lib/application/use_cases/ListUsers');
const useCase = new ListUsers(mockUserRepository);

test('should resolve with all the users persisted in repository', () => {
  // given
  mockUserRepository.find = () => Promise.resolve(['John', 'Jane']);

  // when
  const promise = useCase.execute();

  // then
  expect(promise).resolves.toEqual(['John', 'Jane']);
});
