const { factories } = require("@strapi/strapi");

// Crear el router base
const defaultRouter = factories.createCoreRouter("api::section-info.section-info", {
  config: {
    find: {
      auth: false,
      middlewares: [],
    },
    findOne: {
      auth: false,
      middlewares: [],
    },
  },
});

// Rutas personalizadas adicionales
const customRoutes = [
  {
    method: "GET",
    path: "/section-infos/active",
    handler: "section-info.findActive",
    config: {
      auth: false,
      middlewares: [],
    },
  },
];

// Combinar rutas base con personalizadas
module.exports = {
  routes: [
    ...defaultRouter.routes,
    ...customRoutes,
  ],
};
