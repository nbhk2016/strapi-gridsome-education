// 6.'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async ctx => {
    reqBody = Object.assign({}, ctx.request.body)
    reqBody.user = Object.assign({}, ctx.req.user)
    entity = await strapi.services.advertisement.create(reqBody)
    return entity
  }
};
