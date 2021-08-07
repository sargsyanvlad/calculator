const Router = require('koa-router');
const calcController = require('../../controllers/calcController');

const router = new Router();

router.post('/', async (ctx) => {
  const result = await calcController.calc(ctx);
  return ctx.ok(result);
});


module.exports = router;
