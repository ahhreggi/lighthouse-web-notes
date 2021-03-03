## Objects

An object is a collection of data.
- The order of data does not matter.
- Instead of indices, objects have keys and values.

```
const user = {
  name: "Reggi",
  age: 25,
  eyeColor: "brown"
}
```

Object properties are accessed via the key.
```
console.log(user.name); // "Reggi"
console.log(user["name"]); // "Reggi"
```
- **Dot notation**: without quotation marks
  - Use this whenever you know exactly what key you need
- **Bracket notation**: with quotation marks
  - Use this when accessing a key specified by a variable, if they key is a number, or if they key has a space ("first name")
```
const xyz = "name";
console.log(user[xyz]); // "Reggi"
console.log(user.xyz); // undefined
```

Keys are always a string, regardless of whether they are defined with quotations. Numerical keys may only be accessed via bracket notation.
```
const foo = {1: 123};
console.log(foo[1]); // 123
```