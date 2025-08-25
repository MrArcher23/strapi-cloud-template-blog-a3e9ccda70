"use strict";

/**
 * hero controller
 */

const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreController(
  "api::hero.hero",
  ({ strapi }) => ({
    // Método personalizado para obtener el hero activo
    async findActive(ctx) {
      try {
        const entity = await strapi.db.query("api::hero.hero").findOne({
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

        if (!entity) {
          return ctx.notFound("No active hero found");
        }

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
      } catch (err) {
        ctx.throw(500, err);
      }
    },
  })
);
