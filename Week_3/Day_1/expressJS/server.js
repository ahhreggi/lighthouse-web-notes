const PORT = 8080;
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.render() takes two parameters:
  // 1 - (mandatory) name of the file to be sent out
  // 2 - (optional) an OBJECT that is shared with the file
  res.render("home");
});

app.get("/memes", (req, res) => {
  const templateVars = {name: "Reggi", color: "blue", PI: 3.14, array: ["one", "two", "three"]};
  res.render("memes_index", templateVars);
});

app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});