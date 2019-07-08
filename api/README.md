<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
- [Setup Local SSL](#setup-local-ssl)
- [Tests](#tests)
- [Contributing](#contributing)
    - [Notes:](#notes)
- [Documentation](#documentation)
- [Admin](#admin)
  - [Models](#models)
  - [Routes](#routes)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Installation

_Built with Node, express, mongodb, and mongoose. Requires Node 8+_

- Clone repo
- Download .env file from 1password
- Install dependencies (`npm install`)
- Install mongo (`brew install mongo`)
- Setup folder structure for mongo (`sudo mkdir -p /data/db && sudo chown -R $(whoami):admin /data/db`)
- Run mongodb (`mongod` or `brew services start mongo`)
- Run the application (`npm start`)
- Seed your local DB (`npm run db:reset` (the number represents how many mock listings to create))

# Setup Local SSL

We need to setup our local SSL for HTTPS in order to have better parity with our production environments

- `brew install mkcert`
- `brew install nss` if you use Firefox
- `npm run create-local-cert` (This will generate the local certs as well as create a `.cert` folder)
- `mv localhost.pem ./.cert && mv localhost-key.pem ./.cert`

After these steps you should be able to hit `https://localhost:3000` and see `GET / 404` in the response

# Tests

Integration and Unit tests, written with mocha, chai, supertest, and sinon.

- `npm run test`

# Contributing

1. Create a branch starting with the JIRA ticket number followed by a succinct description written in kebab case (e.g. `DOOR-100-create-new-listing`)
2. Code and test
2a. `npm run toc` to update the table of contents of this README and [MODELS.md](/MODELS.md) if you created a new section
3. Commit often using our [git commit prefixes](https://gist.github.com/JakeBent/e341a4fd4d9ae8a0b40ae13b5573a8f1)
4. Create PR and request a review
5. Assure the PR's Jenkins build passes
6. Fix any requested changes on the review and re-request a review
7. Squash and commit, make sure the commit message's title succinctly describes everything in the PR and uses the appropriate prefix.

### Notes:

- Integration tests
  - [Sample Test](/test/integrations/me.spec.js)
  - All requests are made via the [Env class](/test/integrations/env.js)
  - The env is refreshed after every test and is made accessible via the shared mocha context in a hosted function in any mocha test method i.e. accessible via `this.env` on any `describe`, `context`, `beforeEach`, `it`, etc. written with a non-arrow function.

# Documentation

This API uses stateless JWT authentication. Once a user logs in, the successful response will contain the `token` in the body. That token will expire in 24 hours. Every request will generate a new token that will last 24 hours from the time of the request, so make sure to replace the token in local storage (or wherever) after every request. To logout, simply remove the token from local storage (or wherever).

Attach that token to any requests that require authentication by setting it as the value for the `x-access-token` header field.

# Admin

The Admin panel uses session authentication with a select handful of usernames and passwords. It is accessible by directly hitting the `BASE_URL/admin` route

## Models

Check out [the models documentation](MODELS.md)

## Routes

Check out the postman collection [here](Doorkee.postman_collection.json).
