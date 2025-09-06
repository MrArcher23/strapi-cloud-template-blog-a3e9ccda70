'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service.service', ({ strapi }) => ({
  // Método para obtener servicios activos ordenados
  async findActive(ctx) {
    try {
      const entity = await strapi.entityService.findMany('api::service.service', {
        filters: { isActive: true },
        sort: { order: 'asc' },
        populate: ['image'],
        limit: 4, // Máximo 4 servicios para la galería
      });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    } catch (err) {
      return ctx.badRequest('Error al obtener servicios activos');
    }
  },

  // Método para obtener servicios por orden específico
  async findByOrder(ctx) {
    const { order } = ctx.params;
    
    try {
      const entity = await strapi.entityService.findMany('api::service.service', {
        filters: { order, isActive: true },
        populate: ['image'],
      });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    } catch (err) {
      return ctx.badRequest(`Error al obtener servicio con orden ${order}`);
    }
  }
}));