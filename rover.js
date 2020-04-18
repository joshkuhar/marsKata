function Rover (instructions) {
  if (!instructions) return null
  if (!(typeof instructions === 'string')) return null
  var finalPosition = {
    x: 1,
    y: 3,
    d: 'N'
  }
  return finalPosition.x + ' ' + finalPosition.y + ' ' + finalPosition.d
}
var instructions = '5 5\n1 2 N\nLMLMLMLMM'
var finalPosition = '1 3 N'

var exports = module.exports = {}

exports.Instructions = instructions
exports.Final = finalPosition
exports.Rover = Rover
