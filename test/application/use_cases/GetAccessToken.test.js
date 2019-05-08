const UserRepository = require('../../../lib/application/repositories/UserRepository');
const MockUserRepository = class extends UserRepository {};
const mockUserRepository = new MockUserRepository();

const AccessTokenManager = require('../../../lib/application/security/AccessTokenManager');
const MockAccessTokenManager = class extends AccessTokenManager{};
const mockAccessTokenManager = new MockAccessTokenManager();

const GetAccessToken = require('../../../lib/application/use_cases/GetAccessToken');
const useCase = new GetAccessToken(mockUserRepository, mockAccessTokenManager);

test('should resolve with a generated JWT access token when credentials are ok', () => {
  // given
  mockUserRepository.getByEmail = () => Promise.resolve({ password: 'abcd-1234'});
  mockAccessTokenManager.generate = () => 'generated-jwt-access-token';

  // when
  const promise = useCase.execute('john@mail.com', 'abcd-1234');

  // then
  return expect(promise).resolves.toBe('generated-jwt-access-token');
});

test('should reject when user was not found', () => {
  // given
  mockUserRepository.getByEmail = () => Promise.resolve(null);

  // when
  const promise = useCase.execute('john@mail.com', 'abcd-1234');

  // then
  return expect(promise).rejects.toThrow('Bad credentials');
});

test('should reject when password did not match', () => {
  // given

  mockUserRepository.getByEmail = () => Promise.resolve({ password: 'abcd-1234'});

  // when
  const promise = useCase.execute('john@mail.com', 'wrong-password');

  // then
  return expect(promise).rejects.toThrow('Bad credentials');
});
