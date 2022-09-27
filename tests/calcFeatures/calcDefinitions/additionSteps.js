const { Given, When, Then } = require('@cucumber/cucumber');

Given('two numbers', function (num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
});

When('the addition button is pressed', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('display the sum of the numbers', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
