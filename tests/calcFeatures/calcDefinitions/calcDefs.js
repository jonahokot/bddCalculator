const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const subtract = require('../../../public/subtraction');

Given('the user is on the home page', function () {
  this.page = 'Home';
});

When(
  'the user inserts two numbers, {float} and {float}',
  function (float, float2) {
    this.actualAns = subtract.subtract(float, float2);
  }
);

Then('the {float} should be displayed', function (expectedAns) {
  assert.equal(this.actualAns, expectedAns);
});
