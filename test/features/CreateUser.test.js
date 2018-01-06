const Promise = require('bluebird');
const User = require('../../lib/domain/entities/User');

const UserRepository = require('../../lib/features/ports/UserRepository');
const MockUserRepository = class extends UserRepository {};
const mockUserRepository = new MockUserRepository();

const CreateUser = require('../../lib/features/CreateUser');
const useCase = new CreateUser(mockUserRepository);

test('should resolves with the newly persisted user (augmented with an ID)', () => {
  // given
  const persistedUser = new User(123, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');
  mockUserRepository.persist = jest.fn(() => Promise.resolve(persistedUser));

  // when
  const promise = useCase.execute('John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');

  // then
  expect(promise).resolves.toEqual(persistedUser);
  expect(mockUserRepository.persist).toHaveBeenCalledWith(new User(null, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD'));
});
