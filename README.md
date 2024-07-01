# Front-end Code Challenge

Dear developer, in this test you will have to design the front-end of our recipes book app using Vue 3. If you wish, you can use the installed component library [Quasar](https://quasar.dev/).
You will find below the instructions to complete this challenge.

## Description

This repository implements the Front-end for a cooking recipe book.
It already has quasar and vuex packages installed and if you start the app you'll find some useful links.

### Requirements

- The application should connect to the recipes-book-api and use the endpoints defined there to get and post data. 


### User stories

- As a user, I would like to consult the recipes by searching by the name of the dish or the cooking time.
- As a user, I would like to create my recipes.
- Given a list of ingredients, I would like to know all recipes I can cook.

### What do we value?

- We'll look at how you structure the code, its readability, and documentation.
- The design of the application, how you present the information and your way of structuring it.
- Unit testing or any other functionality that adds value to the project/code will be taken into account.
- The use of [vuex](https://vuex.vuejs.org/) store would be a plus.

## TIP

To add tests configuration you can execute the command:

```bash
quasar ext add @quasar/testing
```


## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).
