# EmpProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

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

## ===============================================
npm uninstall -g @angular/cli

npm cache verify

npm install -g @angular/cli@14

ng version


Install ngrx 
ng add @ngrx/store@14
ng add @ngrx/effects@14

Store dev-tools
ng add store-devtools@14 - Not Required

Generate store file
ng generate class store/employee.reducer --skip-tests
ng generate class store/employee.selector --skip-tests
ng generate class store/employee.action --skip-tests
ng generate class store/employee.effects --skip-tests


Sails - 
npm install -g sails
sails new getEmpRecords
sails generate api getEmpDetails
sails lift
for Dev  - alter
http://localhost:1337

CORS Issue npm install sails-hook-cors --save
If cars issue want to avoid open browser in disabled mode 

open -na "Chromium" --args --disable-web-security --user-data-dir="/tmp/chrome_dev_test"


Create Interceptors
ng generate interceptor interceptor-name


// install boostrap
npm install bootstrap
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
],


