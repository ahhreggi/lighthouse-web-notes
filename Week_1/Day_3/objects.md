## Objects

An object is a collection of data.
- The order of data does not matter.
- Instead of indexes, objects have keys and values.

```
const user = {
  name: "Reggi",
  age: 25,
  eyeColor: "brown"
}
```

## Accessing object values
Object properties are accessed via the key.
```
console.log(user.name); // "Reggi"
console.log(user["name"]); // "Reggi"
```
- **Dot notation**: without quotation marks
  - Use this when you know exactly what key you need (most situations)
- **Bracket notation**: with quotation marks (optional for numerical keys*)
  - Use this when accessing a key specified by a variable
    ```
    const xyz = "name";
    console.log(user[xyz]); // "Reggi"
    console.log(user.xyz); // undefined
    ```
  - Use this if the key is a number
    ```
    const foo = {1: "abc"}
    console.log(foo[1]) // "abc"
    ```
  - Use this if the key has a space
    ```
    const user = {"first name": "Reggi"};
    console.log(user["first name"]); // "Reggi"
    ```
  - Use this if the key is a variable
    ```
    const xyz = "name";
    console.log(user[xyz]); // "Reggi"
    console.log(user.xyz); // undefined
    ```
*When using **bracket notation**, numerical keys can be accessed with or without quotations, but alphanumeric keys must have quotations.
```
const foo = {1: "abc", "someKey": "def"}

console.log(foo[1]); // "abc"
console.log(foo["1"]); // "abc"

console.log(foo[someKey]); // ---> SyntaxError
console.log(foo["someKey"]); // "def"
```

Keys are always a string, regardless of whether they are defined with quotations. Numerical keys may only be accessed via bracket notation.
```
const foo = {1: 123};
console.log(foo[1]); // 123
```

## Looping through objects
You can use a **for ... in** loop to iterate through the keys.
```
const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
  console.log(key) // 'a', 'b', 'c'
  console.log(obj[key]) // 1, 2, 3
}
```
How does this compare to arrays?
- **Arrays**: can use both **for ... of** or **for ... in** loops
- **Objects**: can only use **for ... of** loops

## Converting object keys/values into arrays
You can retrieve an array of an object's keys or values using ```Object.keys(obj)``` and ```Object.values(obj)```.
```
const obj = {a: 1, b: 2, c: 3};

const objKeys = Object.keys(obj);
// Output: ['a', 'b', 'c']

const objValues = Object.values(obj);
// Output: [1, 2, 3]
```
You can also retrieve an array of arrays of key-value pairs using ```Object.entries(obj)```.
```
const objEntries = Object.entries(obj);
// Output: [['a', 1], ['b', 2], ['c', 3]]
```