// Our Notes
//-----------
// Anything we wanna ask Robin, anything we wanna double check
// NOT ROBIN: What the hell is this done() callback and how it works


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
    // POST method
  // In the controllers, we'll be ...
    // DONE GET method
    // POST method

// GET
  // mysql.createConnection()
  // connect();
  // dbConnection.query
  // dbConnection


