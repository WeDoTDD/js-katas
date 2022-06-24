
# JS Katas
### This repo is not quite ready to use, currently WIP.  I will remove this message once it's ready for general use

# Description

A comprehensive list of Kata Descriptions as well as JS Test Scaffolding so that you can get right to practicing!

## Ready to use
Already provides scaffolding / setup for `Jest` and `Mocha` (you choose).

# Katas

## Beginner
#### Greenfield
[FizzBuzz](src/test/Katas/FizzBuzz.md)
#### Refactoring / Brownfield

## Intermediate
#### Greenfield
#### Refactoring / Brownfield

## Advanced
#### Greenfield
#### Refactoring / Brownfield

### WIP: needs to be setup:
- Attack Calculator
- Bowling Game
- Build Pipeline
- Bugs Zero
- Christmas Lights
- Clarify Exception
- Clock-in
- Cloud Migration
- Coffee Roasters
- Configure your own Wardrobe
- Delivery Controller
- Elephant Carpaccio
- Email Sender
- Encode
- Encryptor
- Event Parser
- FIRST-Test-Design
- Fizz Buzz
- K8sAudit
- Game of Life
- Game Of Life Refactoring
- Gilded Rose Refactoring
- GildedRose Approval
- Golf
- Gossiping Bus Drivers
- Ice Cream Scorer
- Manhattan Distance
- Mars Rover
- Minesweeper Approval
- Ohce
- Online Shopping
- Parallel Change
- Parrot
- Phone Numbers
- Race Car
- Roman Numerals
- RPG-Combat
- Score Keeper
- Sing A Song
- Single-Sign-On
- Social Network
- Spiral
- String Calculator
- sudoku
- Supermarket Receipt
- Supermarket Checkout
- Task List Kata
- Tell Don't Ask
- Tennis Kata
- Testing Functional
- Theater
- Theatrical-Players
- The Lift Kata
- Tire Pressure
- Trip Service
- Tic Tac Toe
- Turn Ticket
- Ugly Trivia Game
- Unusual Spending
- Validate And Add Product
- Vending Machine
- Vending Machine Approval
- Wiki Search
- Word Wrap
- Yatzy

# Constraints
These are just some constraints you can add to any kata to make it more challenging or to hone in on specific principles or practices

- Baby Steps
- Ensemble Programming
- Minimalist Coder
- Mute Ping Pong
- No Primitives
- 4 Rules of Simple Design
- Tell! Don't Ask!

# Tests

###  To run from command-line:
- `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` - install brew if you don't have it yet
- `brew install yarn` - if you don't have yarn installed
- `yarn` - install dependencies
- `yarn test-mocha`
- `yarn test-jest`


    ![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/console-run-tests.png)

### To run via JetBrains IDE Test Runner

#### mocha
For IntelliJ or WebStorm, if running the test GUI runner, set "Mocha Options" to the following: `-r @babel/register -r chai/register-expect src/test/**/*.spec.js -w`

![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/intellij-mocha-test-configuration.png)

![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/intellij-mocha-test-gui-run.png)

