Feature: Move Rover
    Move rover forward

    Scenario: Start with a rover
        Given a new rover
        And it is given instructions
        Then the instructions should be a string

    Scenario: Return a number
        Given a new rover
        Then it should output 1 number
