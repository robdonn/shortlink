# Shortlink Generator

- [The Brief](#the-brief)
  - [Required Features](#required-features)
  - [Additional Requirements](#additional-requirements)
- [Development](#development)
  - [Requirements](#requirements)
  - [Setup](#setup)
- [Production](#production)
- [Application](#application)
  - [Features](#features)
    - [Invalid shortlink](#invalid-shortlink)
    - [Link or Copy](#link-or-copy)
  - [Testing](#testing)
    - [Unit tests](#unit-tests)
    - [Acceptance Tests](#acceptance-tests)
- [FAQ](#faq)
  - [Why are Unit and Acceptance tests run separately?](#why-are-unit-and-acceptance-tests-run-separately)

## The Brief

To create an application which generates shortened URLs, similar to services such as `bit.ly` and `t.co`.

### Required Features

- Create a frontend web application where you can submit a long URL and display the registered shorten URL.
- Implement the matching backend that will persist the data and handle redirect. (Language of choice)

### Additional Requirements

- Gather different statistics and present them in the front end
- Write tests (unit / bit / e2e) with the framework of your choice. Please note, this should demonstrate your ability to write tests, 100% coverage is NOT the target.
- Implement and document up to 5 improvements of your choice
- Use Docker / Docker compose

## Development

### Requirements

- [NodeJS](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Setup

1. Clone the repository

   - `ssh`

   ```sh
   git clone git@github.com:robdonn/shortlink.git
   ```

   - `https`

   ```sh
   git clone https://github.com/robdonn/shortlink.git
   ```

2. Install dependencies

   - `npm`

   ```
   npm install
   ```

   - `yarn`

   ```
   yarn install
   ```

   Either `npm` or `yarn` can be used with this project, but I will be using `yarn` in all further examples.

3. Start support services

   ```sh
   yarn services:start
   ```

   This script runs `docker-compose` to spin up 2 containers, `MongoDB` and `Mongo Express`.

   `MongoDB` runs a seed script (located at `config/mongo/init.js`) which creates the user profile for access to the database. It also seeds the database with sample data.

   `Mongo Express` is an express application which provides a UI for navigating the `MongoDB` database. It can be used to view, add, modify and delete databases, collections and entries. You can access the service at http://localhost:8081

4. Start the application

   ```sh
   yarn start
   ```

   This script starts the express application using [Nodemon](https://nodemon.io/). Nodemon watches the server files for changes and restarts the server when it detects them. Nodemon works from a configuration file which can be found at the root of the project, `nodemon.json`.

   The server exposes api endpoints, and in development mode it creates a `webpack-dev-middleware` instance to compile and serve the client side application. In production this middleware is not activated, but instead the server serves prebuilt static files.

You can now access the application at http://localhost:3000

Stopping the support services can be achieved by running the following script:

```sh
yarn services:delete
```

This will shut down and delete the containers. It will also delete the generated docker network and any volumes.

## Production

The application has been designed to be deployed inside a `Docker` container. Scripts have been made available to preview the production build locally.

1. Build the static files

   ```sh
   yarn build
   ```

   This script runs the `webpack` CLI to create a production build of the client side application. The static files created can be found inside the `build` folder.

2. Build the docker containers

   ```sh
   yarn preview:rebuild
   ```

   This script builds the required docker container as specified in the `Dockerfile` located in the root of the project. This involves:

   - Installing the server's node_modules dependencies
     - `/dev/shm` is used to increase installation speed
     - `--production` flag ensures `devDependencies` are not installed
     - `yarn` cache is cleared during the same stage as `install`, this ensures that the cache does not get saved temporarily, increasing the build speed
   - Copying over the required directories:
     - `/build`
     - `/config`
     - `/public`
     - `/server`

3. Start the docker containers

   ```sh
   yarn preview:start
   ```

   This script starts up the local support services (MongoDB and Mongo Express), as well as the newly built docker image of the application.

   This version of the application is available to view at http://localhost:3100. A different port is used between development and production so no confusion can be caused in terms of cached assets, etc.

To shut down the production preview services, run the following script:

```sh
yarn preview:delete
```

This will shut down and delete the containers. It will also delete the generated docker network and any volumes.

## Application

### Features

#### Invalid shortlink

If a user tries to navigate to a shortlink that does not exist in the database, they will be redirected to a page in the client application explaining that the shortlink they used does not exist, and provides a link to the index page of the application so they can generate a new link.

#### Link or Copy

When a user generates a shortlink, they are presented with the a link and a button to add the URL to their clipboard.

The link will always open in a new tab so the user does not lose the information.

If the user clicks the button to add the link to their clipboard, a success message is displayed and the button restores itself after 5 seconds in case they need to use it again.

### Testing

#### Unit tests

Unit tests can be run using the script:

```sh
yarn test:unit`
```

This will run `Jest` with the `jest.config.unit.js` configuration. It will run all unit tests in the `client` and `server` directories if they match the criteria:

- Test file is located inside a `__tests__` directory.
- Test file name ends with `.unit.test.js` or `.unit.test.jsx`

#### Acceptance Tests

Acceptance tests can be run using the script:

```sh
yarn test:acceptance
```

This will run `Jest` with the `jest.config.acceptance.js` configuration. It will run all unit tests in the `client` and `server` directories if they match the criteria:

- Test file is located inside a `__tests__` directory.
- Test file name ends with `.acceptance.test.js` or `.acceptance.test.jsx`

## FAQ

### Why are Unit and Acceptance tests run separately?

Unit tests are designed to test the functionality of a single file or block of code in isolation. The goal is to ensure that the code runs as expected and is not related to user interactions. As a result, all unit tests should mock all of their dependencies. The benefits of this is that coverage reports can be generated accurately without accidental coverage bleeding. This occurs when a `File A` receives coverage because it was called while testing `File B`. This can cause problems later on if `File B` and it's test is deleted or changed and the coverage for `File A` suddenly drops, requiring a developer to go back and write the tests for `File A` when they might not be very familiar with how it works.

Acceptance tests (or Integration tests) on the other hand are usually defined by acceptance scenarios when a feature or bug ticket is created. Acceptance tests usually involve mini-user journeys that interact with multiple parts or components of the application. In this situation you want to test the integrated components to ensure that they do work together correctly and that the user can achieve their task. In this situation you would generally only mock certain things, such as network requests, and therefore you wouldn't collect coverage statistics from these tests as they would very prone to the problem mentioned above.
