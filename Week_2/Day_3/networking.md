# Networking

## What is an IP?
A local network is like a city, and each device or "building" has it's own address (local IP) that's used to connect to your router.

Your router is then connected to a global network, and this gives you a global IP address.

## What is a port?
If a local IP is like a building, a port is like the floor number.

- Transmission Control Protocol (TCP)
  - A set of rules for client-server communication
  - Client connects to a server via port, server listens, client asks for something, server returns a response. This communication pattern goes back and forth until the client disconnects.

- Hypertext Transfer Protocol (HTTP)
  - A subset of TCP (it uses TCP connection but adds extra rules on top of it).
  - Client connects to server, client asks for a request, server responds back, client terminates the connection.