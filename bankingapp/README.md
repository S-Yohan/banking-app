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

-The user fields are assigned to the user object properties and then submitted by a POST request "createNewUser" method in the service.ts file -by clicking the "register" button.
-The "user" object should persist in the database and generate a "secure token". 
-Once registration is complete, the user object is returned as an observable and the user is taken to the user login page to verify login credentials. 
-A Route Guard feature is used to here to ensure that users do not bypass this page.to persist the user in the 



USER STORY #2

--To setup an account the account page - URL: `http://localhost:4200/open-account/{user_id}` eg. `http://localhost:4200/open-account/1` should open an account under the user whose user_id = 1.

-All new clients will be routed to an open-account page which uses another input form with radio buttons to select EITHER savings or checking.
-Opening Balance is $500 for each new account.
-The account object is submitted to the server by a POST request "createNewAccont" in the AccountServices class.
-The object is persisted, after a UNIQUE random number of type double has been generated in the database.
-That object is then returned to the frontend where it is stored as a global variable in the accountServices class.
-Becase the "accounts" objects are refrenced in server repository in a MANY-TO-ONE conext, we ensure that new accounts are created under a specific user.


USER STORY #3

--the login page URL: `http://localhost:4200/login` 
-On this page the clients will input data "username" and "password". 
-By clicking the submit button a GET request, "getUser", is executed to return an Observable of type User.
-That value is assigned to a global variable in the UserService class.

USER STORY #4

-- Account page url: `http://localhost:4200/account/{id}` 
-On the account page the OnInit method ensures that current data is displayed.
-Here interpolation is used to update  the "savingsaccountNumber" and "checkingAccountNumber" as well as "savingsbalance"' and "checkingbalance". 
-ONE type of account is displayed EITHER "savings" or "checking", and the corresponding account numbers and balances (this is facilitated by an  *ngIf directive).

USER STORY #5

--Deposit page url: `http://localhost:4200/account/{id}/deposit`
-On the deposit page the client will input an amount for deposit "depositAmount". 
-Clicking the deposit button should execute a POST request to create a new transaction.
-The Observable of type Transactions is stored as a global variable.
- The current account balance is also updated in the server database as well as in the current global variable.


USER STORY #6

--Transfer page url: `http://localhost:4200/account/{id}/transfer`
-this route needs to be configured in the app.module.ts file as well as the app-routing.module.ts
-On this page the user will input a "transfer amount", "Sender's" account and a "Receiver's" account.
-By clicking the "transfer" button a POST request, "postNewTransaction" should executed from the TransactionService.ts file to return an Observable of type Transactions.
-On the server end, the Transaction object should persist in the database and update the balance of the "Sender's" account to which it is mapped to by a Join Column.

USER STORY #7

--Bill Payments url: `http://localhost:4200/account/{id}/billpay`
-this route needs to be configured in the app.module.ts file as well as the app-routing-module.ts
-On this page the user will click the "Payee" button and select the payee from a list
-The user will then put in a "Pay Amount".
-the user will then click on the "Pay" button.
-The button will execute a POST request in the TransactionService.ts component so that an Observable of type Transactions is returned from the server.
-In the server database the payer's account balance (to which the transaction maps to via a Join Column) should be updated.
