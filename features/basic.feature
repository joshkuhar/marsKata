Feature: Add and Remove Items to a cart
    Everybody needs a goPuff basket with snacks

    Scenario: Start with an empty basket
        Given a new user
        When I don't add anything
        Then I should have 0 products in my basket

    # Scenario: Lets add a coke
    #     Given a new user
    #     When I add a coke
    #     Then I should have 1 products in my basket
    #     And it better be a coke
