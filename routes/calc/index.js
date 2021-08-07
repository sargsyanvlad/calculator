const Router = require('koa-router');
const calcRouter = require('./calcRouter');

const router = new Router({
  prefix: '/calc',
});

router.use(calcRouter.routes());

module.exports = router;

