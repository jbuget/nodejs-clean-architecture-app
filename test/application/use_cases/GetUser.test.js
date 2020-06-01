const User = require('../../../lib/domain/User');
const UserRepository = require('../../../lib/domain/UserRepository');
const mockUserRepository = new UserRepository();
const GetUser = require('../../../lib/application/use_cases/GetUser');

test('should resolve with the corresponding persisted user entity', async () => {
  // given
  const correspondingUser = new User(123, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');
  mockUserRepository.get = jest.fn((userId) => correspondingUser);

  // when
  const user = await GetUser(123, { userRepository: mockUserRepository });

  // then
  expect(mockUserRepository.get).toHaveBeenCalledWith(123);
  expect(user).toEqual(correspondingUser);
});
