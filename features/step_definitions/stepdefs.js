const assert = require('assert')
const { Given, Then, When } = require('cucumber')
const { roverFunction } = require('../../rover')

Given('a new user', function () {
  roverFunction()
})

When('I don\'t add anything', function () { })

Then('I should have {int} products in my basket', function (count) {
  assert.strictEqual(undefined, count)
})
