const HTTP_STATUS_METHODS = {
  ok: 200,
  created: 201,
  accepted: 202,
  noContent: 204,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  internalServerError: 500
};

const CALC_METHODS = {
  '+': 'sum',
  '/': 'divide',
  '*': 'multiply',
  '-': 'subtract'
}

module.exports = {
  HTTP_STATUS_METHODS,
  CALC_METHODS
};

