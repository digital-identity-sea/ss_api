# Getting Started

## Requirements

-   Node 12

## Installation

-   Run `npm install` to install dependencies
-   Create a .env file with the following configuration

    ```dotnev
    NODE_ENV=development
    PORT=8081
    ```

-   Run `npm run start` to start the server
-   If you are doing development, run `npm run test:watch` to automatically run test cases on save

## Testing

-   Run `npm run test` to run the full test suite

## Development Features

-   [Automated API Document Generation](http://localhost:8081)
-   Automated recompilation of API Documentation upon update
-   Automated testing in development mode
    -   Run the command `npm run test:watch` and it will execute and report errors only
-   Development mode auto restart with nodemon
    -   Run the command `npm run start`

## Architecture

-   Clean Architecture
-   Dependency Injection

## Planned Features (Not Implemented Yet)

-   Implementation of SSL for domain
-   Dockerization
-   Usage of a proper backend database (MySQL / NoSQL)
-   Rate Limiting to prevent against brute force attacks
