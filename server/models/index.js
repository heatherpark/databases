var db = require('../db').dbConnection;

// Test our connection
db.connect(function(err) {
  if (err) {
    console.log("womp womp, something's wong!");
  } else {
    console.log("everything's good");
  }
});

// model.messages.get
// model.messages.post

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      // Access the database
      console.log("Hello from GET");

      // Set the query
      var daQuery = 'SELECT * FROM messages';

      // Get all the messages
      db.query(daQuery, function(err, results){
        if(err){
          console.log("You messed up!" + err);
        } else {
          callback(results);
        }
      });

    },
    // a function which can be used to insert a message into the database
    post: function () {
      console.log("Hello from POST");
    }

  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


 // var queryString = 'SELECT * FROM messages';
 //        var queryArgs = [];

 //        dbConnection.query(queryString, queryArgs, function(err, results) {