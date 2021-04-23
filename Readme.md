
# JS Katas
[FizzBuzz](src/test/Katas/FizzBuzz.md)

... more to be added soon

## Configured for:
 - **Babel 7**
 - **Mocha**
 - **Jest**

# Tests

To run from command-line:
- `yarn` - install dependencies
- `yarn test-mocha`
- `yarn test-jest`


    ![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/console-run-tests.png)

### IntelliJ GUI Test runner Config

#### mocha
For IntelliJ or WebStorm, if running the test GUI runner, set "Mocha Options" to the following: `-r @babel/register -r chai/register-expect src/test/**/*.spec.js -w`

![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/intellij-mocha-test-configuration.png)

![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/intellij-mocha-test-gui-run.png)

