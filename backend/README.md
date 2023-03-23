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

## Database
I built a small data model to ensure consistency, scalability, efficiency, and collaboration among stakeholders. It is important for creating a robust and scalable system that can efficiently manage and retrieve data.

https://lucid.app/lucidchart/71240dbf-8223-46d5-afb3-aab53ed223e7/edit?viewport_loc=-304%2C43%2C2219%2C1116%2C0_0&invitationId=inv_a21ba34d-a723-448d-8ee9-a7c2c5d49c62
