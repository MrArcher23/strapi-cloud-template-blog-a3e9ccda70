"use strict";

/**
 * project-showcase service
 */

const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreService(
  "api::project-showcase.project-showcase"
);
