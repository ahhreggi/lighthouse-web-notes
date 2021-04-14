# Data Fetching w/ React

## Side-Effects:
- A secondary effect (an interaction with the outside of the function) when running a function:
  - Setting timers or intervals
  - Modifying DOM elements not controlled by React
  - Network request
  - Connection to a socket server
  - Adding and removing event listeners
  - Logging to the console
- Side-effects are generally undesirable because they can introduce a lot of bugs
- In React, they can disrupt the normal rendering

## The useEffect Hook
- To better handle side-effects, React encapsulates them in a useEffect hook.
- It's important to understand *when* the useEffect happens
- Let's look at the hooks lifecycle

## React Hooks Lifecycle
<img src="https://raw.githubusercontent.com/Wavez/react-hooks-lifecycle/master/screenshot.jpg">
- Takeaway: useEffect occurs after the render phase

The useEffect has 3 potential actions:
1. Adding a side effect
2. Revoking the side effect or not

Recap of the rules of hooks:
1. Don't call hooks inside loops, conditions, or nested functions.
2. Only call hooks from the top-level of a function component or a custom hook.
3. The effect method we pass to useEffect must either return `undefined` or a `function`.
    - The easiest way to avoid issues with this rule is to always declare your effect as a multiline function.

## useEffect Syntax
```
useEffect(() => {
  // execute side effect here
  return () => {
    // clean up any side effect that was added
    // e.g. removing event listeners
  };
}, []); // dependency array (occasionally optional)
```
The purpose of useEffect is to tell React that a component needs to do something after render. React will remember the function wou passed and call it later after performing the DOM updates.
```
const [msg, setMsg] = useState("No message yet!");
useEffect(() => {

  console.log(`useEffect is invoked! Msg ${msg}`);
  const timer = setTimeout(() => {
    // Update the message
    setMsg("Hello!");
  }, 3000)

  // Cleanup function
  return () => clearTimeout(timer);

}, [msg]);
```
Without a dependency array, useEffect will be re-invoked after each render.

## useEffect + API request w/ Axios
```
npm i axios
--
import axios from "axios";
--
useEffect(() => {
  axios({
    method: "GET",
    url: `/api/${process.env.API_ACCESS_TOKEN}/${heroID}`
  })
    .then((response) => {
      setLoading(false)
      console.log(response.data)
      setHeros(prev => [...prev, response.data])
    })
    .catch(err => console.log(err))
}, [heroID])
```