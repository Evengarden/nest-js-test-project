## Instruction
API routing:

```bash
# PostgreSQL

#User API
Get all users - /users(@GET)
Create user - /users(@POST, Body: {
    "name":string,
    "surname":string,
    "patronymic":string
}) 
Get user groups - /users/:id(@GET)
Update user - /users/:id(@PUT)
Delete user - /users/:id(@DELETE)
Add friends - /users/friends/:id(@POST, Body: {
  "friends":[user id``s]
})
Get user friends - users/friends/:id(@GET)
#Group API
Get all groups - /groups(@GET)
Create group - /groups(@POST, Body: {
    "name":string
}) 
Get group users - /groups/:id(@GET)
Update group - /groups/:id(@PUT)
Delete group - /groups/:id(@DELETE)
Add users into the group - /groups/:id(@POST, Body: {
  "users":[user id``s]
})
# MongoDB
Same as PostgreSQL, but with prefix '/mongo/...'

# GraphQL

#User API
Get all users - users()
Create user - createUser(input: {
    "name":string,
    "surname":string,
    "patronymic":string
}) 
Get user groups - userGroups(id:string)
Update user - updateUser(id:string,input{
    "name":string,
    "surname":string,
    "patronymic":string
}) 
Delete user - deleteUser(id:string)
Add friends - createFriends(id: string, input: {
  "friends":["user id``s"]
})
Get user friends -userFriends(id:string))

#Group API
Get all groups - groups()
Create group - createGroup(input: {
    "name":string
}) 
Get group users - groupUsers(id:string)
Update group - updateGroup(id:string)
Delete group - deleteGroup(id:string)
Add users into the group - addUserInGroup(id: string, input: {
  "users":[user id``s]
})
```
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
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

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
