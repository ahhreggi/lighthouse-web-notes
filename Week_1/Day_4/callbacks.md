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