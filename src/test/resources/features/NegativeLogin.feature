#@NegativeLoginFeature @Regression
#Feature: Techfios billing login page functionality validation
#
  #Background: 
    #Given User is on the techfios login page
#
  #@NegativeScenario1 @NegativeScenariosCombined
  #Scenario Outline: User should be able to Login with valid Credentials
    #When User enters username as "<username>"
    #When User enters password as "<password>"
    #When user clicks on sign in button
    #Then user should be able to land on dashboard page
    #Examples:
    #|username|password|
    #|demo@techfios.com | abc123 |
    #|demo@techfios.com | abc1234|                                  
    #|demo1@techfios.com| abc123 |
    #|                  |        |
#
#
#we will use @NegativeScenario1 in the tags to execute and can delete other scenarios
#
  #
  #
  #@NegativeScenario2 @Smoke
  #Scenario: User should not be able to Login with invalid Credentials
    #When User enters username as "demo@techfios.com"
    #When User enters password as "abc1234"
    #When user clicks on sign in button
    #Then user should be able to land on dashboard page
#
  #@NegativeScenario3 @Sanity
  #Scenario: User should be able to Login with valid Credentials
    #When User enters username as "demo1@techfios.com"
    #When User enters password as "abc123"
    #When user clicks on sign in button
    #Then user should be able to land on dashboard page
#
  #@NegativeScenario4 @Smoke
  #Scenario: User should not be able to Login with invalid Credentials
    #When User enters username as ""
    #When User enters password as ""
    #When user clicks on sign in button
    #Then user should be able to land on dashboard page
