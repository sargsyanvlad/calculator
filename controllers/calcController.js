/* eslint-disable no-underscore-dangle, no-param-reassign */
const validator = require('../modules/validator');
const calcService = require('../services/Calculator');
const { InvalidUserInput } = require('../modules/exceptions/');
const { CALC_METHODS } = require("../utils/constants")

class Calculator {
  static calc(ctx) {
      const validationResult = validator.validate(ctx.request.body);

      if (validationResult !== true) {
        throw  new InvalidUserInput(validationResult)
      }
      const { operand1, operand2, operator } = ctx.request.body;
      const action = CALC_METHODS[operator];
      return calcService[action](operand1, operand2)
  }
}

module.exports = Calculator;
