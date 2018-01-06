const SayHello = require('../../../lib/application/use_cases/SayHello');
const useCase = new SayHello();

test('should resolves with "Hello world!" when name is not defined (undefined or null)', () => {
  // when
  const promise = useCase.execute();

  // then
  expect(promise).resolves.toBe('Hello world!');
});

test('should resolves with "Hello _name_!" when name is provided', () => {
  // given
  const name = 'John';

  // when
  const promise = useCase.execute(name);

  // then
  expect(promise).resolves.toBe('Hello John!');
});

