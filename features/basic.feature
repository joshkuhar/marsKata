Feature: Move Rover
    Move rover forward

    Scenario: Start with a rover
        Given a new rover
        And it is given instructions
        Then the instructions should be a string

    Scenario: Return a string
        Given a new rover
        Then the output should be a string
        And the string should be 5 chars long
        And the string should have 2 numbers and 1 letter

    Scenario: Instructions should be parsed
        Given instructions
        Then the prepareFleetInstructions should be return an array of object