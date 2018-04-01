Node Server Authentication
===
Server authentication boilerplate with Passport, JWT, and mongodb.

### Getting Started
* create `config.js` with the following content to hash user's password
```
module.exports = {
    secret: '{your_hash_secret}'
}
```
* `$ npm install`
* `$ npm run dev`
* if MongoDB is not already installed, follow simple instruction below

### MongoDB setup
* Install MongoDB from mongodb.org
* if you are using MacOS, install using `$ brew install mongodb`
* create data directory with `$ mkdir -p /data/db`
* Run `$ mongod` to start mongodb daemon

* Robomongo - client interface to inspect database

### Features
* Signup - `localhost:3090/signup`
* Signing In - `localhost:3090/signin`
* Authorised Request - `localhost:3090/`
