var fleetInstructions = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM'
var finalPosition = '1 3 N'

function Rover (instructions) {
  if (!instructions) return null
  if (!(typeof instructions.moves === 'string')) return null

  var instructionSequence = instructions.moves
  var currentPosition = instructions.currentPosition
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

function prepareFleetInstructions (instructions) {
  var parsedInstructions = instructions.split('\n')
  var topRight = parsedInstructions.shift()

  var allRoverInstructions = []
  var roverInstructions = {}

  for (var index = 0; index < parsedInstructions.length; index++) {
    var roverIndex = index % 2
    if (roverIndex === 0) roverInstructions.start = parsedInstructions[index]
    if (roverIndex === 1) {
      roverInstructions.moves = parsedInstructions[index]

      allRoverInstructions.push({
        topRight: topRight,
        start: roverInstructions.start,
        moves: roverInstructions.moves
      })
    }
  }
  return allRoverInstructions
}

function prepareRoverInstructions (instructions) {
  return {
    currentPosition: {
      x: parseInt(instructions.start[0]),
      y: parseInt(instructions.start[2]),
      d: instructions.start[4]
    },
    moves: instructions.moves
  }
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

var fleetInstructionsReady = prepareFleetInstructions(fleetInstructions)
var roverInstructionsReady = prepareRoverInstructions(fleetInstructionsReady[1])
var roverResult = Rover(roverInstructionsReady)
console.log(roverResult)

var exports = module.exports = {}

exports.PrepareFleetInstructions = prepareFleetInstructions
exports.FleetInstructions = fleetInstructions
exports.Instructions = prepareRoverInstructions(fleetInstructionsReady[0])
exports.Final = finalPosition
exports.Rover = Rover
exports.ChangeDirectionPointed = changeDirectionPointed
exports.AdvanceRover = advanceRover
exports.CalculateNextMove = calculateNextMove
