# Exception Handling

When an error is thrown, the script is stopped.
```
console.log('this message is shown');
x; // this results in an error
console.log('this message is never shown');
```
We *could* use a **try catch** block to catch an error, but the process is synchronous.
```
try {
  x;
} catch(err) {
  console.log(err.message)
}
```
## Exception handling within an async function
Given an async function, use **if else** to handle errors.
```
const processOrder = (customer, callback) => {
  const error = true;

  console.log(`${customer} orders a burger!`);
  setTimeout(() => {
    if (error) {
      callback('Sorry your burger was burnt!', null);
    } else {
      callback(null, `Burger ready for ${customer}`);
    }
  }, 3000);
};

processOrder('Spongebob', (err, message) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(message);
  }
});
```
```request``` example:
```
const request = require('request');

const getPage = (url, callback) => {
  request(url, (error, response, body) => {
    if (error) {
      callback('Sorry there was an error', error.message);
    } else {
      if (response.statusCode !== 200) {
        callback('Sorry, different issue!');
      }
      callback(null, JSON.parse(body));
    }
  });
};

getPage('http://www.whatever.com', (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
```