const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const calc = require('../../../public/calc');

Given('the user is on the home page', function () {
  this.page = 'Home';
});

When(
  'the user inserts two numbers, {float} and {float}',
  function (float, float2) {
    this.actualAns = calc.calculate(float, float2);
  }
);

When(
  'the user inserts two numbers, {float} and {float} and selects {string} option',
  function (float, float2, operator) {
    this.actualAns = calc.calculate(float, float2, operator);
  }
);

Then('{float} should be displayed', function (expectedAns) {
  assert.equal(this.actualAns, expectedAns);
});
