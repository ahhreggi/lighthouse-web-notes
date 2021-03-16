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

// HELPER FUNCTIONS ////////////////////////////

const addNewQuote = content => {
  // Generate a new id
  const quoteId = Math.random().toString(26).substring(2, 8);
  // Create a new quote
  const newQuote = {
    id: quoteId,
    quote: content
  };
  // Add the quote to movieQuotesDb
  movieQuotesDb[quoteId] = newQuote;
  // Return the quote id
  return quoteId;
};

const updateQuote = (quoteId, content) => {
  // Update the content of the quote with the given id
  movieQuotesDb[quoteId].quote = content;
};

// END POINTS OR ROUTES ////////////////////////////

app.get("/", (req, res) => {
  res.send("Welcome to the movie quotes app!");
});

app.get('/quotes.json', (req, res) => {
  res.send(movieQuotesDb);
});

// CRUD OPERATIONS ////////////////////////////

// READ: Get the list of all quotes
app.get("/quotes", (req, res) => {
  // req => request object containing all the info about the request
  // res => response object containing info about the response (also methods)
  const quoteList = Object.values(movieQuotesDb);
  const templateVars = { quoteList };
  // Render a page and pass in an object containing all quotes from the database
  res.render("display_quotes", templateVars);
});

// READ: Display only one quote
app.get("/quotes/:quoteId", (req, res) => {
  // Extract the quote id from the path
  const quoteID = req.params.quoteId;
  const templateVars = { quote: movieQuotesDb[quoteID] };
  // Render a show page for the given ID
  res.render("quote_show", templateVars);
});

// CREATE: Create a new quote
// a) Display the new form
// b) Add the new quote to the database
app.post('/quotes', (req, res) => {
  // Extract the quote info from the post request
  const quoteContent = req.body.quoteContent;  // quoteContent is the "name" attribute of the form
  // Create a new quote in the database
  const quoteId = addNewQuote(quoteContent);
  // Redirect to the show page
  res.redirect(`/quotes/${quoteId}`);
});

// UPDATE: Update a quote
// a) Display the update form
// b) Update the quote in the database

app.post("/quotes/:quoteId", (req, res) => {
  // Extract the quote id from the path
  const quoteId = req.params.quoteId;
  // Extract the content from the form
  const quoteContent = req.body.quoteContent; // quoteContent is the "name" attribute of the form
  // Update the quote in the database
  updateQuote(quoteId, quoteContent);
  // Redirect to /quotes
  res.redirect("/quotes");
});

// DELETE: Delete a quote
// Delete a quote from the database

app.post("/quotes/:quoteId/delete", (req, res) => {
  // Delete the quote from the db
  delete movieQuotesDb[req.params.quoteId];
  // Redirect to main page
  res.redirect("/quotes");
});


app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));