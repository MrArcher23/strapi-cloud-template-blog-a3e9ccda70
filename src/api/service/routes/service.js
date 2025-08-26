const { factories } = require("@strapi/strapi");

// LECCIÓN APRENDIDA: Mantener rutas simples sin endpoints personalizados
// Esto evita el error "Cannot read properties of undefined (reading 'kind')"
module.exports = factories.createCoreRouter("api::service.service", {
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
