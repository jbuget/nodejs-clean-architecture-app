const SayHello = require('../../../lib/application/use_cases/SayHello');

test('should resolve with "Hello world!" when name is not defined (undefined or null)', async () => {
  // when
  const result = await SayHello();

  // then
  expect(result).toBe('Hello world!');
});

test('should resolve with "Hello _name_!" when name is provided', async () => {
  // given
  const name = 'John';

  // when
  const result = await SayHello(name);

  // then
  expect(result).toBe('Hello John!');
});
