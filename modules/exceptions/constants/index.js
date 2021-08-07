
const BASE_ERRORS = {
  INTERNAL_SERVER_ERROR: { status: 500, statusName: 'internalServerError', debug: 'INTERNAL_SERVER_ERROR' },
  INVALID_USER_INPUT: { status: 400, statusName: 'badRequest', debug: 'INVALID_USER_INPUT' },
  NOT_FOUND_ERROR: { status: 404, statusName: 'notFound', debug: 'NOT_FOUND_ERROR' },
};

module.exports = {
  BASE_ERRORS
};
