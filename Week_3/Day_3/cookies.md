# HTTP Cookies & User Authentication

HTTP is **stateless**, meaning every single request is like a new request for the server. There's a request and a response, but if there's another request, the server doesn't know if it might be the same client again.

The server doesn't remember any info about who's making the request.
The server processes requests as if they are new every time.

### Pros:
- Scalability (no session-related dependency)
- Less complex
- Easier to cache
- The server cannot lose track of information

### Cons:
- Cannot easily keep track of context
- Context has to be provided each time
- Good for transactions, not good for conversations

## Cookies

- With cookies, we can share information between the server and the browser with each request
- Provides a way for servers to recognize the user between requests
- Cookies are sent with every request as part of the request headers
- For example, cookies can be used to store a **user id**

## User Login
1. Web Browser (Client)
    - Cookies are stored on the users' browsers
    - POST /login - email + password
2. Web Server (User Authentication)
    - Receive data (req.body)
    - Send email to database
3. Database
    - Retrieve the user info with the email provided
    - Send user info back to Web Server
4. If the password provided === the password of the user retrieved
    - setCookie(user_id, 1)

## Cookie Parser
Cookies are stored as a string in the header. The `cookie-parser` npm package parses that information so that it is more easily accessible.
```
> npm i cookie-parser

const cookieParser = require("cookie-parser");
app.user(cookieParser());

req.cookies // cookies stored in an object
```