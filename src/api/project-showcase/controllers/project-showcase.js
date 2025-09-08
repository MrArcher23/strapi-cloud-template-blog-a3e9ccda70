"use strict";

/**
 * project-showcase controller
 */

const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreController(
  "api::project-showcase.project-showcase"
);
