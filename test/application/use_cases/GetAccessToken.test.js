const UserRepository = require('../../../lib/domain/UserRepository');
const mockUserRepository = new UserRepository();

const AccessTokenManager = require('../../../lib/application/security/AccessTokenManager');
const MockAccessTokenManager = class extends AccessTokenManager {};
const mockAccessTokenManager = new MockAccessTokenManager();

const GetAccessToken = require('../../../lib/application/use_cases/GetAccessToken');

test('should resolve with a generated JWT access token when credentials are ok', async () => {
  // given
  mockUserRepository.getByEmail = () => { return { password: 'abcd-1234' } };
  mockAccessTokenManager.generate = () => 'generated-jwt-access-token';

  // when
  const accessToken = await GetAccessToken('john@mail.com', 'abcd-1234', {
    userRepository: mockUserRepository,
    accessTokenManager: mockAccessTokenManager
  });

  // then
  expect(accessToken).toBe('generated-jwt-access-token');
});

test('should reject when user was not found', () => {
  // given
  mockUserRepository.getByEmail = () => null;

  // when
  const promise = GetAccessToken('john@mail.com', 'abcd-1234', {
    userRepository: mockUserRepository,
    accessTokenManager: mockAccessTokenManager
  });

  // then
  return expect(promise).rejects.toThrow('Bad credentials');
});

test('should reject when password did not match', () => {
  // given
  mockUserRepository.getByEmail = () => { return { password: 'abcd-1234' } };

  // when
  const promise = GetAccessToken('john@mail.com', 'wrong-password', {
    userRepository: mockUserRepository,
    accessTokenManager: mockAccessTokenManager
  });

  // then
  return expect(promise).rejects.toThrow('Bad credentials');
});
