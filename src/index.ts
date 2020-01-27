import * as fp from 'fastify-plugin';

export default fp(async (server, opts, next) => {
  server.route({
    url: '/fhir',
    logLevel: 'warn',
    method: 'GET',
    handler: async (request, reply) => reply.send({ included: true }),
  });
  next();
});
