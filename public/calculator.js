const num1 = document.calc.num1;
const num2 = document.calc.num2;
const operator = document.calc.sign;
const result = document.getElementById('result');

const calculator = require('./calc');

function numCalculate() {
  result.value = calculator.calculate(num1, num2, operator);
}

// numCalculate()