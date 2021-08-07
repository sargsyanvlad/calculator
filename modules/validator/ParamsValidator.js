const { CALC_METHODS } = require("../../utils/constants")
const validator = require("fastest-validator");

class ParamsValidator {
  constructor() {
    this.schema = {
      operand1: { type: "number", convert: true, optional: false }, // required
      operand2: { type: "number", convert: true, optional: false },
      operator: { type: "enum", values: Object.keys(CALC_METHODS), optional: false },
    }
    this.validator = new validator()
    this.checker = this.validator.compile(this.schema)
  }

  validate(body) {
    return this.checker(body)
  }
}

module.exports = ParamsValidator;
