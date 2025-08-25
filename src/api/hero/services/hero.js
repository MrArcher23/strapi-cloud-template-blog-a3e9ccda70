"use strict";

/**
 * hero service
 */

const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreService(
  "api::hero.hero",
  ({ strapi }) => ({
    // Servicio personalizado para gestionar heroes activos
    async findActive() {
      return await strapi.db.query("api::hero.hero").findOne({
        where: {
          isActive: true,
          publishedAt: { $ne: null },
        },
        populate: {
          heroImage: true,
          rating: true,
        },
        orderBy: { createdAt: "desc" },
      });
    },

    // Servicio para activar un hero y desactivar otros
    async setActive(id) {
      // Primero desactivar todos los heroes
      await strapi.db.query("api::hero.hero").updateMany({
        data: { isActive: false },
      });

      // Luego activar el hero específico
      return await strapi.db.query("api::hero.hero").update({
        where: { id },
        data: { isActive: true },
      });
    },
  })
);
