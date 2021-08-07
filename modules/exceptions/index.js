const { BASE_ERRORS } = require('./constants');

class BaseError extends Error {}

class InternalServerError extends BaseError {
  constructor(details) {
    super();
    this.details = details;
  }
  getError() {
    let error = BASE_ERRORS.INTERNAL_SERVER_ERROR;
    if (this.details) {
      error = { ...error, details: this.details };
    } else error = { ...error, details: BASE_ERRORS.INTERNAL_SERVER_ERROR.debug };
    return error;
  }
}

class InvalidUserInput extends BaseError {
  constructor(details) {
    super();
    this.details = details;
  }

  getError() {
    let error = BASE_ERRORS.INVALID_USER_INPUT;
    if (this.details) {
      error = { ...error, details: this.details };
    }
    return error;
  }
}

module.exports = {
  BaseError,
  InternalServerError,
  InvalidUserInput,
};
