#@LoginFeature @Regression
#Feature: Techfios billing login page functionality validation
#
  #Background: 
    #Given User is on the techfios login page
#
  #@LoginScenario1 @Smoke @Sanity
  #Scenario: User should be able to Login with valid Credentials
    #When User enters username as "demo@techfios.com"
    #When User enters password as "abc123"
    #When user clicks on sign in button
    #Then user should be able to land on dashboard page
#
  #@LoginScenario1
  #Scenario: User should not be able to Login with invalid Credentials
    #When User enters username as "demo@techfios.com"
    #When User enters password as "abc1234"
    #When user clicks on sign in button
    #Then user should be able to land on dashboard page
