const Promise = require('bluebird');

const UserRepository = require('../../lib/domain/UserRepository');
const MockUserRepository = class extends UserRepository {};
const mockUserRepository = new MockUserRepository();

const ListUsers = require('../../lib/features/ListUsers');
const useCase = new ListUsers(mockUserRepository);

test('should resolves with all the users persisted in repository', () => {
  // given
  mockUserRepository.find = () => Promise.resolve(['John', 'Jane']);

  // when
  const promise = useCase.execute();

  // then
  expect(promise).resolves.toEqual(['John', 'Jane']);
});
