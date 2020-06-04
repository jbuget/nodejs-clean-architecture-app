const UserRepository = require('../../../lib/domain/accounts/UserRepository');
const mockUserRepository = new UserRepository();
const DeleteUser = require('../../../lib/application/use_cases/accounts/delete-user');

test('should resolve (without result)', async () => {
  // given
  mockUserRepository.remove = jest.fn(() => true);

  // when
  await DeleteUser(123, { userRepository: mockUserRepository });

  // then
  expect(mockUserRepository.remove).toHaveBeenCalledWith(123);
});
