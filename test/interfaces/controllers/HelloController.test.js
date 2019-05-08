const SayHello = require('../../../lib/application/use_cases/SayHello');
const HelloController = require('../../../lib/interfaces/controllers/HelloController');

beforeEach(() => {
  SayHello.prototype.execute = jest.fn();
});

afterEach(() => {
  SayHello.prototype.execute.mockReset();
});

describe('#sayHelloWorld', () => {

  test('should resolves', () => {
    // given
    SayHello.prototype.execute.mockImplementationOnce(() => Promise.resolve('Bonjour monde !'));

    // when
    const promise = HelloController.sayHelloWorld();

    // then
    expect(promise).resolves.toBe('Bonjour monde !');
    expect(SayHello.prototype.execute).toHaveBeenCalled();
  });
});

describe('#sayHelloPerson', () => {

  test('should resolves', () => {
    // given
    SayHello.prototype.execute.mockImplementationOnce(() => Promise.resolve('Buongiorno John !'));
    const request = { params: { name: 'John' } };

    // when
    const promise = HelloController.sayHelloPerson(request);

    // then
    expect(promise).resolves.toBe('Buongiorno John !');
    expect(SayHello.prototype.execute).toHaveBeenCalledWith('John');
  });
});


