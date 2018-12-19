const Promise = require('bluebird');
const User = require('../../../src/domain/entities/User');

const UserRepository = require('../../../src/application/repositories/UserRepository');

const MockUserRepository = class extends UserRepository {};
const mockUserRepository = new MockUserRepository();

const CreateUser = require('../../../src/application/use_cases/CreateUser');

const useCase = new CreateUser(mockUserRepository);

test('should resolve with the newly persisted user (augmented with an ID)', () => {
  // given
  const persistedUser = new User(123, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');
  mockUserRepository.persist = jest.fn(() => Promise.resolve(persistedUser));

  // when
  const promise = useCase.execute('John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');

  // then
  expect(mockUserRepository.persist).toHaveBeenCalledWith(new User(null, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD'));
  return expect(promise).resolves.toEqual(persistedUser);
});
