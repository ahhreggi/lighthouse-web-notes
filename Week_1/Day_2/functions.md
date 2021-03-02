## Function Declarations vs. Expressions

Function declarations can be used before initialization while function expressions cannot:
```
console.log(someFunction()); // works
console.log(someOtherFunction()); // error
```


Function declaration
```
function someFunction() {
  return "I am a declaration"
}
```

Function expression
```
const someOtherFunction = function() {
  return "I am an expression"
}
```

But why is it a bad thing to be able to use a function before initialization (function declaration)?
- They get hoisted to the top so you can't redefine them mid-way through.
- If you define it multiple times, the latest is always used.

### **TL;DR: Use function expressions!**