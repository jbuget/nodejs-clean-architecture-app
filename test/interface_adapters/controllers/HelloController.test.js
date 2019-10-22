const SayHello = require('../../../src/application_business_rules/use_cases/SayHello');
const HelloController = require('../../../src/interface_adapters/controllers/HelloController');

jest.mock('../../../src/application_business_rules/use_cases/SayHello');

describe('#sayHelloWorld', () => {

  test('should resolves', async () => {
    // given
    SayHello.mockImplementationOnce(() => 'Bonjour monde !');

    // when
    const response = await HelloController.sayHelloWorld();

    // then
    expect(response).toBe('Bonjour monde !');
  });
});

describe('#sayHelloPerson', () => {

  test('should resolves', async () => {
    // given
    SayHello.mockImplementationOnce(() => 'Buongiorno John !');
    const request = { params: { name: 'John' } };

    // when
    const response = await HelloController.sayHelloPerson(request);

    // then
    expect(response).toBe('Buongiorno John !');
  });
});


