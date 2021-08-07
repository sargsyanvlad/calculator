class Calculator { // Anyone can extends from this class and add his own methods override existing
  constructor() {
  }

  sum (a, b) {
    return { result: a+b }
  }

  divide (a, b) {
    return { result: a/b };
  }

  multiply(a,b) {
    return { result: a*b };
  }

  subtract(a, b) {
    return { result: a-b };
  }

}

module.exports = new Calculator();
