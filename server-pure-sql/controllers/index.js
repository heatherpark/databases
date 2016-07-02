var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // GET controller will reach into the model
      // get all the rows that match
      // and send them back as a response
      models.messages.get(function(data){
        res.send(data);
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("HELLO FROM POST CONTROLLER!");
     //  var message = req.body;
     //  console.log(message);
     //  models.messages.post(message, function(){

     //   res.send("success");
     // });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log("HELLO FROM USERS GET CONTROLLER");
    },
    post: function (req, res) {
    //   console.log("HELLO FROM USERS POST CONTROLLER");
    //   var user = req.body;
    //     models.users.post(user, function() {
    //       res.send("success");
    //     });
    }
  }
};
