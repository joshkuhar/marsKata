const assert = require('assert')
const { Given, Then, When } = require('cucumber')
const { Rover, Instructions } = require('../../rover')

var rover = Rover(Instructions)

Given('a new rover', function () {
  return rover
})

When('it is given instructions', function () {
  return true
})

Then('the instructions should be a string', function () {
  assert.strictEqual(typeof Instructions, 'string')
})

Then('it should output {int} number', function (number) {
  assert.strictEqual(rover.x, number)
})
