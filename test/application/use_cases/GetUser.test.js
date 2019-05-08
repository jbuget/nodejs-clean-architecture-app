const User = require('../../../lib/domain/entities/User');

const UserRepository = require('../../../lib/application/repositories/UserRepository');
const MockUserRepository = class extends UserRepository {};
const mockUserRepository = new MockUserRepository();

const GetUser = require('../../../lib/application/use_cases/GetUser');
const useCase = new GetUser(mockUserRepository);

test('should resolve with the corresponding persisted user entity', () => {
  // given
  const correspondingUser = new User(123, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');
  mockUserRepository.get = jest.fn((userId) => Promise.resolve(correspondingUser));

  // when
  const promise = useCase.execute(123);

  // then
  expect(mockUserRepository.get).toHaveBeenCalledWith(123);
  return expect(promise).resolves.toEqual(correspondingUser);
});
