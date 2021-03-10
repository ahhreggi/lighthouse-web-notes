
const net = require('net');
const server = net.createServer();
const users = []; // array of all connections

// Event Listeners
server.on('connection', (client) => {
  console.log("Someone has connected!");
  client.setEncoding('utf8');
  users.push(client);
  client.on('data', (data) => {
    console.log(data);
    for (let user of users) {
      user.write(data);
    }
  });
  client.on('end', () => {
    users.splice(users.indexOf(client), 1);
  });
});

// Server can run only on a specific port
// Only one server per port
server.listen(3001, () => {
  console.log("Server is online...");
});