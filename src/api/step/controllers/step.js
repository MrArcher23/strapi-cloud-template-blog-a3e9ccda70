"use strict";

/**
 * step controller
 */

const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreController(
  "api::step.step",
  ({ strapi }) => ({
    // Método personalizado para obtener steps activos ordenados
    async findActive(ctx) {
      try {
        const entities = await strapi.db.query("api::step.step").findMany({
          where: {
            isActive: true,
            publishedAt: { $ne: null },
          },
          orderBy: { order: "asc" },
        });

        if (!entities || entities.length === 0) {
          return ctx.notFound("No active steps found");
        }

        const sanitizedEntities = await this.sanitizeOutput(entities, ctx);
        return this.transformResponse(sanitizedEntities);
      } catch (err) {
        ctx.throw(500, err);
      }
    },
  })
);
