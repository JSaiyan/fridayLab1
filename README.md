# fridayLab1
$ node -v
v20.15.0

$ npm -v
10.7.0

$ npm init es6
> npx
> es6

nodemon = node monitor 

Runtime scripts - used to run your application under different configurations

Dependencies- installed tools/frameworks that application requires. Needed for express webserver etc.

DEv DEpendencies- installed tools/frameworks only used during development. Once released to users it would no longer be needed. 

lodash.uniq(array); is from lodash manager not JS

chalk - gives styling 

Express.js - web framework for creating web back-ends using Node.js 

npm rm colors = npm remove


  "dependencies": {
    "@faker-js/faker": "^9.6.0",
    "chalk": "^5.4.1",
    "colors": "^1.4.0",
    "lodash": "^4.17.21",
    "validator": "^13.15.0"
  }


Scripts 
npm scripts are commnades that you can define in the package.json file under the "scripts" property.
they can be used to automate tasks such as:
-testing your project
-building your project 
-deploying your project

  "scripts": {
    "dev": "node test.js",
    "test": "node index.js"
  },

npm run start 
-will run start on node index.js

npm run test
-will run start on node test.js

semantic versioning (semver)
-Major, minor and patch
-"express": "4.18.2"

Patch imporovement that do not effect the functionaly of the package
minor new features backwards compatbitle with over versions 
major breaking changes in functionality.

~matches patch
^matches minor 
>matches greater than others..major

 npm i slugify@1.3.1