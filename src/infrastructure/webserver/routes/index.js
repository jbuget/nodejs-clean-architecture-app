const requireDirectory = require('require-directory');

const routeModules = requireDirectory(module);

module.exports = Object.keys(routeModules).reduce((routes, routeName) => {
  const modules = routeModules[routeName];
  if (modules) {
    if (Array.isArray(modules)) {
      return routes.concat(modules);
    }

    return routes.push(modules);
  }

  return routes;
}, []);
