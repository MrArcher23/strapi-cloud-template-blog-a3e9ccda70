const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreController(
  "api::service.service",
  ({ strapi }) => ({
    // Método estándar - sin endpoints personalizados para evitar errores
    // El frontend usará filtros estándar como:
    // GET /api/services?filters[isActive][$eq]=true&sort=order:asc

    async find(ctx) {
      try {
        console.log("🔍 Obteniendo servicios...");

        // Llamar al método estándar del padre
        const { data, meta } = await super.find(ctx);

        console.log(`📊 Servicios encontrados: ${data ? data.length : 0}`);

        return { data, meta };
      } catch (error) {
        console.error("❌ Error en find services:", error);
        return ctx.badRequest("Error al obtener servicios", {
          details: error.message,
        });
      }
    },
  })
);
