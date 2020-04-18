const assert = require('assert')
const { Given, Then, When } = require('cucumber')
const { Rover, Instructions } = require('../../rover')

var rover = Rover(Instructions)

Given('a new rover', function () {
  return Rover
})

When('it is given instructions', function () {
  return Rover(Instructions)
})

Then('the instructions should be a string', function () {
  assert.strictEqual(typeof Instructions, 'string')
})

Then('the output should be a {word}', function (word) {
  assert.strictEqual(typeof rover, word)
})

Then('the string should be {int} chars long', function (count) {
  assert.strictEqual(rover.length, count)
})

Then('the string should have {int} numbers and {int} letter', function (coordCount, letterCount) {
  assert.strictEqual(rover.replace(/\D/g, '').length, coordCount)
  assert.strictEqual(rover.replace(/[^NESW]/g, '').length, letterCount)
})
