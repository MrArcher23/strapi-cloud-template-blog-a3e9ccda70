"use strict";

/**
 * step router
 */

const { factories } = require("@strapi/strapi");

const defaultRouter = factories.createCoreRouter("api::step.step");

// Personalizar rutas agregando ruta para steps activos
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
    path: "/steps/active",
    handler: "api::step.step.findActive",
  },
];

module.exports = customRouter(defaultRouter, myExtraRoutes);
