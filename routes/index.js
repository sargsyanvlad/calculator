const Router = require('koa-router');

const router = new Router();

const calcRoutes = require('./calc');

router.use(calcRoutes.routes());

module.exports = function (app) {
  app.use(router.routes());
  app.use(router.allowedMethods());
};
