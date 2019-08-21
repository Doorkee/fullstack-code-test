<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)

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
