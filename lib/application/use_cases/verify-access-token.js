'use strict';

module.exports = (accessToken, { accessTokenManager }) => {
  try {
    const decoded = accessTokenManager.decode(accessToken);
    return { uid: decoded.uid };
  } catch(err) {
    throw new Error('Invalid access token');
  }
};
