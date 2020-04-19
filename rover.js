var instructions = '5 5\n1 2 N\nLMLMLMLMM'
var finalPosition = '1 3 N'
var currentPosition = {
  x: 1,
  y: 3,
  d: 'N'
}

function Rover (instructions) {
  if (!instructions) return null
  if (!(typeof instructions === 'string')) return null

  var instructionSequence = 'LMLMLMLMM'
  var currentPosition = {
    x: 1,
    y: 2,
    d: 'N'
  }
  var nextPosition = {}
  var historyOfMoves = []
  for (var move = 0; move < instructionSequence.length; move++) {
    historyOfMoves.push(currentPosition)
    nextPosition = calculateNextMove(currentPosition, instructionSequence.charAt(move))
    currentPosition = nextPosition
  }
  historyOfMoves.push(currentPosition)
  finalPosition = historyOfMoves[instructionSequence.length]
  return finalPosition.x + ' ' + finalPosition.y + ' ' + finalPosition.d
}

function changeDirectionPointed (currentDirection, rotate) {
  var direction = ''
  if (rotate === 'L') {
    switch (currentDirection) {
      case 'N':
        direction = 'W'
        break
      case 'W':
        direction = 'S'
        break
      case 'S':
        direction = 'E'
        break
      case 'E':
        direction = 'N'
        break
      default:
        direction = currentDirection
    }
  }

  if (rotate === 'R') {
    switch (currentDirection) {
      case 'N':
        direction = 'E'
        break
      case 'E':
        direction = 'S'
        break
      case 'S':
        direction = 'W'
        break
      case 'W':
        direction = 'N'
        break
      default:
        direction = currentDirection
    }
  }

  return direction
}

function advanceRover (location) {
  if (location.d === 'N') location.y = location.y + 1
  if (location.d === 'S') location.y = location.y - 1
  if (location.d === 'E') location.x = location.x + 1
  if (location.d === 'W') location.x = location.x - 1
  return location
}

function calculateNextMove (currentLocation, move) {
  var location = {
    x: currentLocation.x,
    y: currentLocation.y,
    d: currentLocation.d
  }
  if (move === 'L') location.d = changeDirectionPointed(location.d, move)
  if (move === 'R') location.d = changeDirectionPointed(location.d, move)
  if (move === 'M') location = advanceRover(location)

  return location
}

calculateNextMove(currentPosition, 'R')
var exports = module.exports = {}

exports.Instructions = instructions
exports.Final = finalPosition
exports.Rover = Rover
exports.ChangeDirectionPointed = changeDirectionPointed
exports.AdvanceRover = advanceRover
exports.CalculateNextMove = calculateNextMove
