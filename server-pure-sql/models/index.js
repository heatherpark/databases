var db = require('../db').db;

// Test our connection
db.connect(function(err){
  if(err){
    console.log("womp womp, something's wrong!");
  } else {
    console.log("Let's rock and roll!");
  }
});

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (cb) {
      // console.log("Hello from GET");
      // console.log("This is the callback" + cb);

      var q = 'SELECT * FROM messages'
      // Query the database and get all messages
      db.query(q, function(err, rows){
        if(err) {
          console.log(err);
        } else {
          cb(rows);
        }
      });
    },
    post: function (message, callback) {
      var q = 'INSERT INTO messages (message, username, roomname) values (' + '"' +  message.message +  '"' + ',' + '"' + message.username + '"' + ',' + '"' +message.roomname + '"' + ');'


      console.log(q);
      db.query(q, function (err, results, fields) {
        if (err) throw err;
        else {
          callback();
        }
      });

      // Post the user to the chat server
      // Post a message to the node chat server

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log("This is USERS GET model");
    },
    post: function (user, callback) {
      console.log("This is USERS POST model");
      db.query("INSERT INTO users (username) values ('" + user.username + "');",
        function (err, results, fields) {
        if (err) throw err;
        else {
          callback();
        }
      });
    }
  }
};
