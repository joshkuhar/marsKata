Feature: Move Rover
    Move rover forward

    Scenario: Start with a rover
        Given a new rover
        When it moves
        Then it should output 2 coordinates and 1 letter

    # Scenario: Lets add a coke
    #     Given a new rover
    #     When it stops
    #     Then it should have 2 coordinates and 1 letter
    #     And they better not be the same
