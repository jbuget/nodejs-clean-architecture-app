'use strict';

/**
 * This module centralize all the environment variables of the application. Thanks to this module, there MUST NOT be any
 * `process.env` instruction in any other file or module.
 */
module.exports = (() => {

  const host = process.env.HOST || 'http://localhost';
  const port = process.env.PORT || 3000;

  const environment = {
    server: {
      host,
      port,
      url: `${host}:${port}`
    },

    databases: {
      accounts: {
        url: process.env.DATABASES_ACCOUNTS_URI,
      },
      items: {
        url: process.env.DATABASES_DOCUMENTS_URI,
      }
    }
  };

  if (process.env.NODE_ENV === 'test') {
    // Specify your testing config
  }

  return environment;
})();
