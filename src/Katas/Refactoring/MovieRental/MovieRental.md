# Movie Rental
Original source: [https://gitlab.com/azae/craft/movie-rental/movie-rental-typescript](movie-rental-typescript) 

Then modified for use in [js-katas](https://github.com/WeDoTDD/js-katas)

# Description

The existing source in this kata follows Martin Fowler's book "Refactoring, Improving the Design of Existing Code".

### Refactoring
Martin Fowler Writes:

When you find you have to add a feature to a program, and the program's code is not
structured in a convenient way to add the feature, first refactor the program to make it
easy to add the feature, then add the feature.

Whenever you do refactoring, the first step is always the same:

- You need to build a solid set of tests for that section of code. The tests are essential because even though you follow refactorings structured to avoid most of the opportunities for introducing bugs, you are still human and still make mistakes. Thus you need solid tests.

# Existing Code
This kata's production code has a `statement` method which prints out a simple text output of a rental statement:
```
Rental Record for martin
  Ran 3.5
  Trois Couleurs: Bleu 2
Amount owed is 5.5
You earned 2 frequent renter points
```

### What you need to do:
We want to write an HTML version of the statement method:
```
<h1>Rental Record for <em>martin</em></h1>
<table>
  <tr><td>Ran</td><td>3.5</td></tr>
  <tr><td>Trois Couleurs: Bleu</td><td>2</td></tr>
</table>
<p>Amount owed is <em>5.5</em></p>
<p>You earned <em>2</em> frequent renter points</p>
```

## Build

- `yarn`

## Tests
Choose the script dependent on which framework you chose to do your kata in:

- `yarn test-jest-movie-rental`
- `yarn test-mocha-movie-rental`

