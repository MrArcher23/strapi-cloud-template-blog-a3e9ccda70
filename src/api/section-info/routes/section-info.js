const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreRouter("api::section-info.section-info", {
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

// Rutas personalizadas
module.exports.routes = [
  ...module.exports.routes,
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
