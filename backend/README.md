# Todo back-end application

Build a RESTful api that services requests for the todo application using docker/docker-compose to standing up the datastore.

## Requirements

- Docker
- Docker Compose
- PostgreSQL

## Installation

- Instantiate a new PostgreSQL database

- Please check the docker-compose.yml file to validate the variables data and create a .env file and add the following environment variables:

```
DB_HOST=[database host]
DB_NAME=[database name]
DB_USER=[database user]
DB_PASSWORD=[database password]
DB_PORT=[database port]
```

- Build the Docker image

```
docker-compose build
```

- To run the migrations

```
docker-compose run --rm app npx sequelize-cli db:migrate
```

- To run the seeders

```
docker-compose run --rm app npx sequelize-cli db:seed:all
```

## Architecture

I used a Clean Architecture on this application to create a software that is more:

- Testable
- Maintainable
- Independent of a framework
- Independent of a database
- Independent of UI
- ... and independent of any other tools and drivers

## Testing

I used FIRST principles in order to make good written tests

- This application is using Chai, Mocha and Supertest for testing purposes.
- Run the tests `npm run test`

## Environment

- This environment is under prettier and eslint rule code styles
