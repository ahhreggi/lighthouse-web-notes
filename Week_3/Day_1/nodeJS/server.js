// Require the server library
const http = require("http");

// Initialize the server
const server = http.createServer((request, response) => { // Request, Response
  // Request --> piece of paper that you (client) slide under the door
  // Response --> piece of paper that the server slides back to you under the door.
  console.log(request.url);
  console.log(request.method);
  // TCP --> you kept connected and waited for messages
  // HTTP --> you connect, make a request, get a response, disconnect!
  if (request.url === "/" && request.method === "GET") {
    response.end("Hello world!!");
  } else if (request.url === "/memes" && request.method === "GET") {
    response.end("don't let your dreams be memes");
  } else {
    response.end("The page doesn't exist!");
  }
});

// We want the server to listen...
server.listen(8080, () => {
  console.log("Server is online on port: 8080");
});