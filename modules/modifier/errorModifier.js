const { BaseError, InternalServerError } = require('../exceptions/index');

function normalizeError(exception) {
  return exception; // it's possible to do some err modifications here
}

module.exports = (ctx, exception) => {
  exception = normalizeError(exception);

  if (exception instanceof BaseError) {
    return exception;
  }
  console.log(exception);
  return new InternalServerError();
};

