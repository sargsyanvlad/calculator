const _set = require('lodash/set');

module.exports = (ctx) => {
  if (ctx.status >= 204 && ctx.status < 400 || ctx.status === 405 || ctx.status === 404) return;
  const result = ctx.body;
  const response = {};

  _set(response, 'result', result.result);

  ctx.body = response;
};
