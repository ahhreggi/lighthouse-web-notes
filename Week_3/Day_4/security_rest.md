# Security & REST

### Security Issue #1: Passwords aren't safe when stored in plaintext
- Solution: hashing
- Unlike encyption, hashing is a one-way process
- Salt + Password -> Hash Function (n times) -> Salt + Hash Result
- It's a lengthy process so it's virtually impossible to decrypt by brute force alone

### Security Issue #2: Users can see data in cookies and modify them, becoming any other user
- Solution: cookies should be encrypted, signed cookies

### Security Issue #3: stealing cookies, HTTP is plain-text, man-in-the-middle attack
- Solution: HTTPS (end-to-end encryption)


# REST (Representational State Transfer)
REST is a pattern or convention to organize our URL structure.
- Resource-based routes convention
- The key abstraction of information in REST is a resource
- REST uses a resource identifier to identify the particular resource involved in an interaction between components
- It should use HTTP verbs to express what the request wants to accomplish
- Resource information must be part of the URL
- It uses common data formats (JSON for API)
- Communication is stateless
- Each request must pass all information to fulfill the request
- Idempotency of requests

### End Points

By following REST principles, it allows us to design our end points:

| Action                                | http verb | end point                |
| ------------------------------------- | --------- | ------------------------ |
| List all quotes                       | GET       | get '/quotes'            |
| Get a specific quote                  | GET       | get '/quotes/:id'        |
| Display the new form                  | GET       | get '/quotes/new'        |
| Create a new quote                    | POST      | post '/quotes'           |
| Display the form for updating a quote | GET       | get '/quotes/:id/update' |
| Update the quotes                     | PUT       | put '/quotes/:id'        |
| Deleting a specific quote             | DELETE    | delete '/quotes/:id'     |

#### Nested Resources

You may need to access nested resources. For example, when you need to create a new comment:

| Action               | http verb | end point                  |
| -------------------- | --------- | -------------------------- |
| Create a new comment | POST      | post '/quotes/:id/comments' |