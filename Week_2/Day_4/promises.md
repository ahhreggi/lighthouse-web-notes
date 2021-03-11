# Promises
A promise is an object that represents the **eventual completion (or failure)** of an asynchronous operation and its resulting value.

The Promise has 3 potential states (an analogy):
- **Pending State:** You've been given a receipt with a number.
- **Fulfilled (resolve() => value):** Your order is ready! You present the ticket and get your meal, or...
- **Rejected (reject() => error):** They're out of burgers! Your order cannot be fulfilled. It's rejected!

## How to use a promise:
1. Create an executor function to create a promise
2. Consuming the promise (using it)

The **Executor** function:
```
const executorFct = (resolveFct, rejectFct) => {
  const error = true;
  setTimeout(() => {
    if (error) {
      // error case
      rejectFct("Failed! :(");
    } else {
      // success case
      resolveFct("Success! :)");
    }
  }, 3000);
}
```
Usage:
```
// 1. Create a promise object

const promiseObj = new Promise(executorFct);

// 2. Consume the promise (2 methods: .then(), .catch())

promiseObj
  .then((result) => {
    // success case
    console.log("result", result)
  })
  .catch((err) => {
    // error case
    console.log(`Error: ${err}`);
  })
```
When you return a promise inside ```.then()```, it passes it to the next ```.then()```:
```
const placeOrder = () => {

  // Functions are now promises
  // getUser() => getOrder() => getUser()

  let username1 = '';
  let selectedMeal = '';
  let username2 = '';

  getUser()
    .then(user1 => {
      // Access to user 1
      username1 = user1;
      return getMeal(); // pass the promise object to the next .then
    })
    .then(meal => {
      // Access to meal
      selectedMeal = meal
      return getUser(); // pass the promise object to the next .then
    })
    .then(user2 => {
      // Access to user2
      username2 = user2;
      console.log(`${username2} has ordered a ${selectedMeal} from ${username1}`)
    })
    .catch(err => console.log(`Error: ${err}`))
};

placeOrder();
```
## ```Promise.all(array)```
```
const placeOrder = () => {
  Promise
    .all([getUser(), getOrder(), getUser])
    .then(result => {
      // result is an array
      console.log(`${result[2]} gets a ${result[1]} from ${result[0]}`) 
    })
    .catch(err => console.log(err))
}
```