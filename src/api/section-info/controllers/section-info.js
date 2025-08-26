const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreController(
  "api::section-info.section-info",
  ({ strapi }) => ({
    // Método personalizado para obtener secciones activas
    async findActive(ctx) {
      try {
        console.log("🔍 Buscando secciones info activas...");
        
        const entities = await strapi.entityService.findMany(
          "api::section-info.section-info",
          {
            filters: { isActive: true },
            populate: ["image"],
            sort: { createdAt: "desc" },
            publicationState: "live"
          }
        );

        console.log(`📊 Encontradas ${entities ? entities.length : 0} secciones activas`);

        // Transformar y sanitizar respuesta
        const sanitizedEntities = entities
          ? await Promise.all(
              entities.map((entity) =>
                strapi.entityService.findOne("api::section-info.section-info", entity.id, {
                  populate: ["image"]
                })
              )
            )
          : [];

        return ctx.send({
          data: sanitizedEntities,
          meta: {
            pagination: {
              page: 1,
              pageSize: sanitizedEntities.length,
              pageCount: 1,
              total: sanitizedEntities.length
            }
          }
        });

      } catch (error) {
        console.error("❌ Error en findActive section-info:", error);
        return ctx.badRequest("Error al obtener secciones info activas", {
          details: error.message
        });
      }
    }
  })
);
