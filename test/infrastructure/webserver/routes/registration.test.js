const Hapi = require('@hapi/hapi');
const routeRegistration = require('../../../../lib/infrastructure/webserver/routes/registration');

let server;

beforeEach(async () => {
  server = Hapi.server({ port: null });
  await server.register(routeRegistration);
  await server.initialize();
});

afterEach(async () => {
  await server.stop();
});

describe('POST /registration', () => {

  test('should exist and return HTTP status code 201 when succeeded', async () => {
    // when
    const res = await server.inject({
      method: 'POST',
      url: '/registration',
    });

    // then
    expect(res.statusCode).toBe(201);
  });

  test('should return HHTP status code 422 when request payload is malformed', async function(assert) {
    // when
    const res = await server.inject({
      method: 'POST',
      url: '/registration',
      payload:{
        'first-name': 'Jean',
        'last-name': 'Dupont',
        'email': 'jdupont@example.net',
        'password': 'Lorem ipsum'
      }
    });

    // then
    expect(res.statusCode).toBe(422);
  });

});

