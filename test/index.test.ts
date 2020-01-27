import * as fastify from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import root from '../src/index';

describe('GET /fhir', () => {
  let server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>;

  beforeEach(async () => {
    server = fastify({});
    server.register(root);
    await server.ready();

    jest.clearAllMocks();
  });

  it('returns 200', async () => {
    const response = await server.inject({ method: 'GET', url: '/fhir' });
    expect(response.statusCode).toEqual(200);
    expect(JSON.parse(response.payload).included).toBeTruthy();
  });
});
