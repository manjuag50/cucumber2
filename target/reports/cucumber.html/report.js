$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/TechfiosLogin.feature");
formatter.feature({
  "name": "Techfios billing login page functionality validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepdefinition.user_is_on_the_tecfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to Login with valid Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@LoginScenario1"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepdefinition.User_enters_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepdefinition.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepdefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepdefinition.user_should_be_able_to_land_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepdefinition.user_is_on_the_tecfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to Login with invalid Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@LoginScenario1"
    }
  ]
});
formatter.step({
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepdefinition.User_enters_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password as \"abc1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepdefinition.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepdefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepdefinition.user_should_be_able_to_land_on_dashboard_page()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.LoginStepdefinition.user_should_be_able_to_land_on_dashboard_page(LoginStepdefinition.java:56)\r\n\tat ✽.user should be able to land on dashboard page(file:///C:/Users/manju/Selenium/CucumberSession2/Cucumber1/src/test/resources/features/TechfiosLogin.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});