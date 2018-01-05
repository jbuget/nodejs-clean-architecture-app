'use strict';

const requireDirectory = require('require-directory');

const routeModules = requireDirectory(module);

const routes = Object.keys(routeModules).reduce((routes, moduleName) => {
  const module = routeModules[moduleName];
  if (module) {
    if (Array.isArray(module)) {
      routes = routes.concat(module);
    } else {
      routes.push(module);
    }
  }
  return routes;
}, []);

module.exports = routes;