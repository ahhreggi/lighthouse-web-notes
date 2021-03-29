# Databases

## What is a database?

- Organized collection of persistent data
- Information being written to be used at a later time
- Third tier of the web development architecture (Client - Application - Data)

## Database Management System (DBMS)

- Software designed to manage data in a database
- Manipulates the data, the data format, file structure
- Defines rules to validate and manipulate this data
- Uses a query language

## Main DBMS

- Oracle
- MySQL (free software)
- Microsoft SQL Server
- IBM DB@
- PostgreSQL (free software)
- SQLite (free software)
- MariaDB (free software)

## Types of databases

- Relational databases
  - MySQL, PostgreSQL, SQLite
- Key-value stores (like Javascript objects)
  - Redis
- Column stores
  - Cassandra
  - HBase
- Graph databases
- Document databses (JSON-like format)
  - MongoDB
- Real-time database
  - Firebase

## Relational Databases

- Tables (data stored in rows and columns)
- There is a relationship between the tables

## SQL

- Structured Query Langu- Developed by IBM in the early 70s
- Initially called SEQUEL (Structured English Query Language)
- Declarative language (vs. imperative)
- We state only what we need
- We do not worry about how to get it

# PostgreSQL

```
CREATE jokes DATABASE
\c jokes
CREATE TABLE jokes(
  id SERIAL PRIMARY KEY,   # --> serial = auto-incrementing int
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  rating FLOAT NOT NULL,
  author_id INT REFERENCES authors(id)
)
DROP TABLE jokes;
\! pwd
\i db/01-create_tables.sql
```

To insert into specific columns:

```
INSERT INTO authors (name, funny, desc) VALUES ("Paul", TRUE, "A student in march01");
```
