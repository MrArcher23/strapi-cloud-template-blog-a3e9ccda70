module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/services/active',
      handler: 'service.findActive',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/services/order/:order',
      handler: 'service.findByOrder',
      config: {
        policies: [],
        middlewares: [],
      },
    }
  ],
};