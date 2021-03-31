# SQL and Node

See: https://node-postgres.com/features/connecting

PostgreSQL allows you to connect with credentials
- Host
- Port
- User
- Password


Credentials are provided via environment variables
```
// .env

$ PGUSER=dbuser \
  PGHOST=database.server.com \
  PGPASSWORD=secretpassword \
  PGDATABASE=mydb \
  PGPORT=3211 \
  node script.js
```

We can also supply it to the Pool directly
```
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'development',
  password: 'development',
  database: 'w05d03'
});
```


## Connecting to Node
- A client is able to do one operation at one time
- A pool is a bunch of clients
```
npm install pg
--
const { Pool, Client } = require("pg");

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'development',
  password: 'development',
  database: 'w05d03'
});

pool.connect((err) => {
  if (err) throw new Error(err);
  console.log("connected!");
});
```

## Running queries via callback
```
pool.query("SELECT * FROM students;", (err, res) => {
  console.log("COMPLETED!");
  // console.log(err);
  console.log(res.rows)
});
```

## Running queries via Promises
```
pool.query("SELECT * FROM students;")
  .then(res => {
    console.log("COMPLETED PROMISE!")
    console.log(res.rows);
  })
  .catch(err => {
    console.log(err);
  });
```

## SQL Injections

If users are allowed to pass in arguments for a query directly, the database is vulnerable to malicious attacks via destructive queries.
```
pool.query(`SELECT * FROM students WHERE id = ${args[0]};`)
  .then(...)
  .catch(...);
```
The query expects a value for `id`, but a user may enter `1 OR 1 = 1`, exposing the entire `students` database (due to the condition `1 = 1` always being `true`). They could also enter `1; DROP TABLE students;`, deleting the entire database entirely.

### A better alternative:
```
pool.query(`SELECT * FROM students WHERE id = $1 AND name = $2`, [ args[0], arg[1] ])
  .then(...)
  .catch(...);
```

## Connecting to Node + Express
1. `npm install pg`
2. Require PG Pool
3. Set PG parameters (via `.env`)
4. On connect, throw any errors or warnings for connecting
```
npm install pg
const { Pool } = require("pg");
```

## Separation of Concerns
For scalability purposes, it isn't the best idea to directly use database-dependent syntax to run queries. Instead, you could for example:
1. Delegate database connection responsibilities to a separate file called `db/dbInitializeConnection.js`
2. Move queries to a separate file called `dbHelpers/index.js` and have them return the specific rows needed by each `GET` route