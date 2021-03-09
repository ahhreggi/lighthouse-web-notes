## Asynchronous vs. Synchronous

**Asynchronous** means that functions run in parallel, allowing code after the asynchronous call to be executed immediately without waiting.

This is the opposite of **synchronous**, where only one line of code is run at a time and should something break, the entire script stops/freezes.

## setTimeout(callback, delay)
This asynchronous method calls a callback function after the specified number of milliseconds.
```
console.log("hello");
setTimeout(() => console.log("world"), 3000);
console.log("123");

Output:
hello
123
world // after 3 seconds
```

## How does it work?
JavaScript is an event-driven language. It executes all operations on a single thread (Event Loop).
1. A callback is registered
2. An intensive operation is performed
3. Upon completion, the callback is triggered

In the meantime, additional operations continue to be added to the queue and are executed in order.