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
