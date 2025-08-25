"use strict";

/**
 * hero router
 */

const { factories } = require("@strapi/strapi");

const defaultRouter = factories.createCoreRouter("api::hero.hero");

// Personalizar rutas agregando ruta para hero activo
const customRouter = (innerRouter, extraRoutes = []) => {
  let routes;
  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes.concat(extraRoutes);
      return routes;
    },
  };
};

const myExtraRoutes = [
  {
    method: "GET",
    path: "/heroes/active",
    handler: "api::hero.hero.findActive",
  },
];

module.exports = customRouter(defaultRouter, myExtraRoutes);
