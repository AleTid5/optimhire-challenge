<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://www.josebernalte.com/wp-content/uploads/2018/02/mongoDB.png" width="200" alt="Nest Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="200" alt="Nest Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://miro.medium.com/max/2404/1*JUOITpaBdlrMP9D__-K5Fw.png" width="200" alt="Nest Logo" /></a>
</p>


[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This is a web service which exposes the current exchange rate of USD to MXN from three
different sources in the same endpoint (a JSON API, an XML API and a scrapped site). Users can make 10 requests every 30 minutes.

The challenge has been built using [Nest](https://github.com/nestjs/nest) and the database used is [MongoDB](https://www.mongodb.com/).

## Installation

```bash
$ npm install
```

## Running the app
### There 2 ways to run the app.

- The first one is a local way, where you have to have running MongoDB in the port 27027.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

> ###### Note: To seed the database you've to run `npx nestjs-command database:seed:users`

- The other way is using [Docker](https://www.docker.com/) 🐳

```bash
# development
$ docker-compose up
```

> ###### Note: By using this way, the users will be automatically migrated

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## How to use it

1. First we have to make a request to `http://localhost:3000/api/user/login` using some [user](#users)
2. The user should be sent in the data (x-www-form-urlencoded if using Postman)
3. If the authentication is OK, the server will respond with a JWT token
4. Now have 60s to use this token to make the request to `http://localhost:3000/api/exchange`.
   
> ###### Note: We have to add the token in the header of the request `Authorization: Bearer {your-token}` 

## <a id="users"></a> Mocked users

```js
{
  users: [
    {
      username: "jhon@test.com",
      password: "fake123"
    },
    {
      username: "robert@test.com",
      password: "hello123"
    }
  ]
}
```

## License

Nest is [MIT licensed](LICENSE).
