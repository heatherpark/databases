// Our Notes
//-----------
// Anything we wanna ask Robin, anything we wanna double check
// NOT ROBIN: What the hell is this done() callback and how it works
// Where is the best place to instantiate sequelize

// Awesome Promise definition
// Basically a promise represents a value which will be present at some point - "I promise you I will give you a result or an error at some point". This means that


// Awesome ORM definition
// Bookself.js
// Bookshelf aims to provide a simple library for common tasks when querying databases in JavaScript, and forming relations between these objects, taking a lot of ideas from the the Data Mapper Pattern.

// With a concise, literate codebase, Bookshelf is simple to read, understand, and extend. It doesn't force you to use any specific validation scheme, provides flexible and efficient relation/nested-relation loading, and first class transaction support.

// It's a lean Object Relational Mapper, allowing you to drop down to the raw knex interface whenever you need a custom query that doesn't quite fit with the stock conventions.


// Storing our chatterbox messages in the database

// Client side is complete
// Server is complete (express)

// Create a database
  // POST
    // Saves messages
  // GET
    // Sends back all the messages

// Schema
// Format the message from the user
  // username
  // message
  // roomname

// From our Client Side
  // send()
  // fetch()
  // getRooms()
  // createRooms()

// What's in our folder structure
  // Models: manipulate our data --> reaching into the database
  // Controllers
    // A controller directs everything
    // In ideal situation, model and view never interact
    // Controller is the middle ** NEW THING **
    // View: Client

// messages => table
  // objectID
  // createdAt
  // username
  // message
  // roomnmae

// Extra Credit part :)
  // TABLE: Messages
    // ID (auto-increments)
    // user_id
    // room_id
    // message

  // TABLE: Users
    // user_id
    // username (text)

  // TABLE: Rooms
    // room_id
    // roomname


// TODO List
  // DONE Create a database (Edit our schema)
    // DONE Verify that the database is connecting/working
  // DONE? MAYBE NOT? Edit the spec to fit our settings
  // DONE Head to db/index.js and somehow connect to our database
  // In the models, we'll be doing queries
    // DONE GET method
    // DONE POST method
  // In the controllers, we'll be ...
    // DONE GET method
    // DONE POST method
  // All tests now pass
  // Chatterbox works and persists even after the server is shut down

  // Refactor using sequelize
    // ORM
      // Object-relational mapping (ORM) makes it possible to access
      // objects without having to consider how these objects
      // relate to their data sources (database). So no manual SQL queries.

  // Requiring sequelize
  // Declaring an new instance of sequelize
  // Defining User
  // Defining Message
  // TODO? Define what kind of relationship is between User and Message
  // Refactor our model to use sequelize methods instead of db.query
  // Test using chatterbox
  // Verify that the entries are being written to the database



// GET
  // mysql.createConnection()
  // connect();
  // dbConnection.query
  // dbConnection