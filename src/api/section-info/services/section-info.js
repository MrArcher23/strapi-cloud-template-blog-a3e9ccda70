const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreService(
  "api::section-info.section-info",
  ({ strapi }) => ({
    // Servicio personalizado para manejar secciones info
    async findActive() {
      try {
        console.log("🔧 Servicio: Buscando secciones info activas");

        const entries = await strapi.entityService.findMany(
          "api::section-info.section-info",
          {
            filters: { isActive: true },
            populate: ["image"],
            sort: { createdAt: "desc" },
            publicationState: "live",
          }
        );

        console.log(
          `🔧 Servicio: Encontradas ${entries ? entries.length : 0} secciones`
        );
        return entries;
      } catch (error) {
        console.error("❌ Error en servicio section-info:", error);
        throw error;
      }
    },

    async findBySlug(slug) {
      try {
        console.log(`🔧 Servicio: Buscando sección info por slug: ${slug}`);

        const entries = await strapi.entityService.findMany(
          "api::section-info.section-info",
          {
            filters: { slug: slug, isActive: true },
            populate: ["image"],
            publicationState: "live",
          }
        );

        return entries?.[0] || null;
      } catch (error) {
        console.error(`❌ Error al buscar por slug ${slug}:`, error);
        throw error;
      }
    },
  })
);
