const Promise = require('bluebird');
const SayHello = require('../../../lib/features/SayHello');
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
    const controller = new HelloController();

    // when
    const promise = controller.sayHelloWorld();

    // then
    expect(promise).resolves.toBe('Bonjour monde !');
    expect(SayHello.prototype.execute).toHaveBeenCalled();
  });
});

describe('#sayHelloPerson', () => {
  test('should resolves', () => {
    // given
    SayHello.prototype.execute.mockImplementationOnce(() => Promise.resolve('Buongiorno John !'));
    const controller = new HelloController();
    const request = { params: { name: 'John' } };

    // when
    const promise = controller.sayHelloPerson(request);

    // then
    expect(promise).resolves.toBe('Buongiorno John !');
    expect(SayHello.prototype.execute).toHaveBeenCalledWith('John');
  });
});


