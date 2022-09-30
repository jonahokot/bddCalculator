module.exports = {
  calculate(num1, num2, operator) {
    if (operator === 'add') {
      return num1 + num2;
    }
    if (operator === 'subtract') {
      return num1 - num2;
    }
    if (operator === 'multiply') {
      return num1 * num2;
    }
    return num1 / num2;
  },
};
