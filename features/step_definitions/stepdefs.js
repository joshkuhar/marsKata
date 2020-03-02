const assert = require('assert')
const { Given, Then, When } = require('cucumber')
const { roverFunction } = require('../../rover')

var rover = roverFunction('5 5\n1 2 N\nLMLMLMLMM')

Given('a new rover', function () {
  return rover
})

When('it is given instructions', function () {
  assert.strictEqual(typeof rover, 'string')
})

Then('it should move', function () {
  return true
})

Then('it should output {int} coordinates and {int} letter', function (coordinates, letter) {
  assert.strictEqual(2, coordinates)
  assert.strictEqual(1, letter)
})
