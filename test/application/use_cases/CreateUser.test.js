const User = require('../../../lib/domain/User');
const UserRepository = require('../../../lib/domain/UserRepository');
const mockUserRepository = new UserRepository();
const CreateUser = require('../../../lib/application/use_cases/CreateUser');

test('should resolve with the newly persisted user (augmented with an ID)', async () => {
  // given
  const persistedUser = new User(123, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');
  mockUserRepository.persist = jest.fn(() => persistedUser);

  // when
  const user = await CreateUser('John', 'Doe', 'john.doe@email.com', 'P@s$W0rD', { userRepository: mockUserRepository });

  // then
  expect(mockUserRepository.persist).toHaveBeenCalledWith(new User(null, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD'));
  expect(user).toEqual(persistedUser);
});
