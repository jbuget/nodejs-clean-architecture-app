const Promise = require('bluebird');

const UserRepository = require('../../lib/domain/UserRepository');
const MockUserRepository = class extends UserRepository {};
const mockUserRepository = new MockUserRepository();

const DeleteUser = require('../../lib/features/DeleteUser');
const useCase = new DeleteUser(mockUserRepository);

test('should resolves (without result)', () => {
  // given
  mockUserRepository.remove = jest.fn((userId) => Promise.resolve());

  // when
  const promise = useCase.execute(123);

  // then
  expect(promise).resolves.toBe();
  expect(mockUserRepository.remove).toHaveBeenCalledWith(123);
});
