const Promise = require('bluebird');

const UserRepository = require('../../../lib/application/repositories/UserRepository');
const MockUserRepository = class extends UserRepository {};
const mockUserRepository = new MockUserRepository();

const DeleteUser = require('../../../lib/application/use_cases/DeleteUser');
const useCase = new DeleteUser(mockUserRepository);

test('should resolve (without result)', () => {
  // given
  mockUserRepository.remove = jest.fn((userId) => Promise.resolve());

  // when
  const promise = useCase.execute(123);

  // then
  expect(promise).resolves.toBe();
  expect(mockUserRepository.remove).toHaveBeenCalledWith(123);
});
