"use strict";

/**
 * step service
 */

const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreService(
  "api::step.step",
  ({ strapi }) => ({
    // Servicio personalizado para obtener steps activos ordenados
    async findActive() {
      return await strapi.db.query("api::step.step").findMany({
        where: {
          isActive: true,
          publishedAt: { $ne: null },
        },
        orderBy: { order: "asc" },
      });
    },

    // Servicio para reordenar steps
    async reorderSteps(stepIds) {
      const promises = stepIds.map((id, index) =>
        strapi.db.query("api::step.step").update({
          where: { id },
          data: { order: index + 1 },
        })
      );

      return await Promise.all(promises);
    },
  })
);
