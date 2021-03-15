# Servers

A web server is just a program that is able to give info to other computers via a network.

## NodeJS vs ExpressJS
Express allows us to set up a server far more easily with more features.

Basic setup:

```
const PORT = 8080;
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("hello world");
});

app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
```

## EJS (Embedded JavaScript Templates)

Allows us to use JavaScript to build HTML pages.
```
// server.js

app.get("/memes", (req, res) => {
  const templateVars = {name: "Reggi", color: "blue", PI: 3.14, array: ["one", "two", "three"]}
  res.render("memes_index", templateVars)
});
```
```
// views/memes_index.ejs

<html>
  <body>
    <h1>Memes</h1>
    <li><%= name %></li>
    <li><%= color %></li>
    <li><%= PI %></li>
    <% for (let index = 0; index < array.length; index++) { %>
      <li><b><%= array[index] %></b></li>
    <% } %>
  </body>
</html>
```