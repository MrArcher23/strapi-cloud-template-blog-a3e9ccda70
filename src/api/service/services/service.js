const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreService(
  "api::service.service",
  ({ strapi }) => ({
    // Servicios estándar - sin métodos personalizados complejos
    // Mantenemos simplicidad para evitar errores de deployment

    async find(params) {
      try {
        console.log("🔧 Servicio: Buscando servicios");

        // Usar el servicio estándar del padre
        const result = await super.find(params);

        console.log(
          `🔧 Servicio: Encontrados ${result.results ? result.results.length : 0} servicios`
        );
        return result;
      } catch (error) {
        console.error("❌ Error en servicio service:", error);
        throw error;
      }
    },
  })
);
