const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

// Create an Express app
const app = express();

// MIDDLEWARE: morgan allows us to log the request in the terminal
app.use(morgan("short"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Static assets (images, css files) are being served from the public folder
app.use(express.static("public"));

// Set ejs as the template engine
app.set("view engine", "ejs"); //pug, handlebars

// In-memory database
const movieQuotesDb = {
  d9424e04: {
    id: "d9424e04",
    quote: "Why so serious?",
  },
  "27b03e95": {
    id: "27b03e95",
    quote: "YOU SHALL NOT PASS!",
  },
  "5b2cdbcb": {
    id: "5b2cdbcb",
    quote: "It's called a hustle, sweetheart.",
  },
  "917d445c": {
    id: "917d445c",
    quote: "The greatest teacher, failure is.",
  },
  "4ad11feb": {
    id: "4ad11feb",
    quote: "Speak Friend and Enter",
  },
};

const quoteComments = {
  "70fcf8bd": {
    id: "70fcf8bd",
    comment: "So awesome comment!",
    quoteId: "d9424e04",
  },
  g89if43e: {
    id: "g89if43e",
    comment: "So awesome comment!",
    quoteId: "4ad11feb",
  },
};

// HELPER FUNCTIONS



// END POINTS OR ROUTES

app.get("/", (req, res) => {
  res.send("Welcome to the movie quotes app!");
});


// CRUD Operations on quotes

// READ: Get the list of all quotes
app.get("/quotes", (req, res) => {
  // req => request object containing all the info about the request
  // res => response object containing info about the response (also methods)

  // Get an array of quotes from the db
  const quoteList = Object.values(movieQuotesDb);

  const templateVars = { quoteList }

  // Render a page and pass it the object
  res.render("display_quotes", templateVars);
});

// READ: Display only one quote

// CREATE: Create a new quote
// a) Display the new form
// b) Add the new quote to the database

// UPDATE: Update a quote
// a) Display the update form
// b) Update the quote in the database

// DELETE: Delete a quote
// Delete a quote from the database


app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));