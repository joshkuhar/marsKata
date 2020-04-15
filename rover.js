function Rover (instructions) {
  return { instructions: instructions, x: 1 }
}
var instructions = '5 5\n1 2 N\nLMLMLMLMM'
var exports = module.exports = {}

exports.Rover = Rover
exports.Instructions = instructions
