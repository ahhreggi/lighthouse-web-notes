# Automated Testing
Automated testing is the practice of writing code to **programmatically** test and execute the functionality of our code by comparing actual outcomes to expected outcomes.
- Save time compared to manual testing
- Easy to see if any new changes to our code is breaking anything
- Think about potential bugs up-front
- Write more modular code
- Could be integrated into build workflow

## Test Driven Development (TDD)
1. **Write a failing test** to indicate which functionality needs to be added and how it should behave.
2. Write the **minimal amount of code** to make the test pass. At this stage, the code doesn't have to be elegant or clean.
3. **Refactor the code.** Clean up the code to make it more readable and maintainable.

## NodeJS Assert
We can use the assert library to write assertions.
```
const assert = require('assert').strict; // .strict => ===

assert.equal(actual, expected); // for primitive types
assert.deepEqual(actual, expected); // for arrays, objects
```
The problem with a failed assertion is that it throws an error, stopping the script.

So what can we do? **Try Catch** blocks handle errors more gracefully.
```
try {
  // What we need to execute
} catch (err) {
  // Executes if an error is thrown
}

err -> err.name, err.actual, err.expected, err.message
```
Is there an even easier way to do all of this?

## Mocha & Chai
```
npm i mocha --save-dev
npm i chai --save-dev 
```
Mocha is a testing framework. It will look for a folder called "test" within the project folder and run your test scripts. Instead of using the NodeJS Assert library, we use **Chai**.
```
// Sample: test/myFunctionTest.js

const { expect, assert } = require('chai');
const myFunction = require('../myFunction.js');

describe('myFunction', () => {
  it('should return some output', () => {
    const actual = myFunction();
    const expected = 'some output';

    // There are many ways to write assertions...

    expect(actual).to.deep.equal(expected);
    assert.equal(actual, expected);
  });
});
```
To run tests:
```
mocha
```

## Chai - Behavior Driven Development (BDD)
Chai is an assertion library. It helps make assertions a little more expressive.
- Describes the behavior of the system from the customer's point of view
- Based on users' stories
- Uses a more natural language that everyone can understand

Chai cheatsheet: https://devhints.io/chai