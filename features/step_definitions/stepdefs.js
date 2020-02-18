const assert = require('assert')
const { Given, Then, When } = require('cucumber')
const { roverFunction } = require('../../rover')

Given('a new rover', function () {
  roverFunction()
})

When('it moves', function () {
  return true
})

Then('it should output {int} coordinates and {int} letter', function (coordinates, letter) {
  assert.strictEqual(2, coordinates)
  assert.strictEqual(1, letter)
})
