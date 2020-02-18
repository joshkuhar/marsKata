const assert = require('assert')
const { Given, Then, When } = require('cucumber')
const { roverFunction } = require('../../rover')

Given('a new rover', function () {
  roverFunction()
})

When('it moves', function () {
  return true
})

Then('it should have {int} coordinates', function (count) {
  assert.strictEqual(2, count)
})
