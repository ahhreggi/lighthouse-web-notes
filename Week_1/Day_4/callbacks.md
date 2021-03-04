## Callback Functions
Just like variables, we can pass functions into other functions. These functions are called callback functions.
```
const cbFn = function(foo) {
  console.log(foo)
  console.log("This is a function.");
};
const myFn = function(anotherFn, bar) {
  anotherFn(bar);
};

myFn(cbFn, "hello");

Output:
hello
This is a function.
```
The callback function can also be defined inline as an **anonymous function** (it has no attachments to a variable).
```
const myFn = function(anotherFn, bar) {
  anotherFn(bar);
};

myFn(foo => {
  console.log(foo);
  console.log("This is a function.");
}, "hello");

Output:
hello
This is a function.
```
Functions that take in callbacks are referred to as **Higher Order Functions**. Below are some examples...

## Array.prototype.forEach()
This method executes a provided function to each element in the array. It combines the value & index access capabilities of for ... of and for ... in loops.
```
const array = ['a', 'b', 'c', 'd', 'e'];

array.forEach((value) => console.log(value));

Output:
a
b
c
d
e

array.forEach((value, index) => console.log(value, index));

Output:
a 0
b 1
c 2
d 3
e 4
```
## Array.prototype.map()
This method creates a **new array**, where each element is the result of calling a provided function on every element in the calling array.
```
const array = [1, 2, 3, 4, 5];

const newArray = array.map((element) => {
  return element * 2;
});

console.log(newArray);

Output:
[2, 4, 6, 8, 10]
```

## Array.prototype.filter()
This method creates a new array with all elements that pass the test implemented by the provided function.

```
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);

Output:
[2, 4]
```