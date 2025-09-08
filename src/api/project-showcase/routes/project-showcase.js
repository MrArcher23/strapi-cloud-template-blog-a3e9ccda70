"use strict";

/**
 * project-showcase router
 */

const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreRouter(
  "api::project-showcase.project-showcase"
);
