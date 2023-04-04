# Bankingapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


---Banking

The main page URL route: `http://localhost:4200/`

***USER STORIES**

USER STORY #1

--From the main page a new client should be able to create a new client profile or login to an exising user profile.


--the registration page URL: `http://localhost:4200/register`. On this page clients will input data "name", "username", "password", "confirmPassword", "email", and "address" (city only).
-HTML input form is used here with property binding to the variables in the register.ts file.

-The user fields are sent through the service.ts file --by clicking the "register" button, a POST request is sent to the server to persist the "user" object database and generate a "secure token". Once registration is complete, the user is taken to the user login page to login. A Route Guard feature is used to here to ensure that users do not bypass this page.to persist the user in the 



USER STORY #2

--To setup an account the account page - URL: `http://localhost:4200/open-account/{user_id}` eg. `http://localhost:4200/open-account/1` should open an account under the user whose user_id = 1.

-All new clients will be routed to an open-account page which uses another input form with radio buttons to select EITHER savings or checking.
-Opening Balance is $500 for each new account.
-The account object is submitted to the backend "Account controller". The object is persisted, after a UNIQUE random number of type double has been generated in the database.
-That object id persisted and then returned to the frontend where it is stored in the accountServices class.
-The user and the account databases have been linked by a ONE_TO_MANY reference.


USER STORY #3

--the login page URL: `http://localhost:4200/login` On this page the clients will input data "username" and "password". By clicking the submit button a GET request is executed to the above url path to return a client object. User is a a JSON object in the request body.

-- Account page url: `http://localhost:4200/account/{id}` 
On the account page OnInit automatically updates "savingsaccountNumber" and "checkingAccountNumber" as well as "savingsbalance"' and "checkingbalance".
a GET request should be sent using the above URL to return the account object from the Accounts table.

--Deposit page url: `http://localhost:4200/account/{id}/deposit`
On the deposit page the client will input an amount for deposit "depositAmount". Clicking the deposit button should execute a patch request to update checkingbalance for the currently logged in user. The currenly loggin user will have its "loggedin" property set to true in the clients table.

--Transfer page url: `http://localhost:4200/account/{id}/transfer`
-this route needs to configured in the app.module.ts file as well as the app-routing.module.ts
-On this page the user will input a "transfer amount", "Sender" account and a "Receiver" account.
-the account table should be updated accordingly.
-the transaction table should also be updated.

--Bill Payments url: `http://localhost:4200/account/{id}/billpay`
-this route needs to be configured in the app.module.ts file as well as the app-routing-module.ts
-On this page the user will click the "Payee" button and select the payee from a list
-The user will then put in a "Pay Amount".
-the user will then click on the "Pay" button.
-the transaction table will need to be updated as well as the account tables.
