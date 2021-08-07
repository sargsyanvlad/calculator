const { responseModifier, errorModifier } = require('../../modules/modifier');

module.exports = async (ctx, next) => {
  try {
    await next();
    responseModifier(ctx);
    // logger.info(ctx);
  } catch (ex) {
    console.log(ex)
    ex = errorModifier(ctx, ex).getError();
    ctx[ex.statusName]({ error: ex });
    // logger.info(ctx)
  }
};
