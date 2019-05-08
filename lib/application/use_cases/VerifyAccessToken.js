'use strict';

module.exports = (accessToken, { accessTokenManager }) => {
  const decoded = accessTokenManager.decode(accessToken);
  if (!decoded) {
    throw new Error('Invalid access token');
  }
  return { uid: decoded.uid };
};
