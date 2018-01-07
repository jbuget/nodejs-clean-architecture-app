'use strict';

const Boom = require('boom');

module.exports = (server, options) => {
  return {
    authenticate: (request, h) => {

      const authorizationHeader = request.headers.authorization;
      if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        throw Boom.badRequest('Missing or wrong Authorization request header', 'oauth');
      }
      const accessToken = authorization.replace(/Bearer/gi, '').replace(/ /g, '');
      return h.authenticated({ access_token: accessToken, credentials: { user: 'john' } });
    }
  };
};