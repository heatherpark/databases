var models = require('../models');



module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      // GET controller will reach into the model
      // get all the rows in our table
      // JSON.stringify
      // res.send()
      models.messages.get(function(messages){
        // stringify the messages
        messages = JSON.stringify(messages);
        res.send(messages);
      });

    },
    // a function which handles posting a message to the database
    post: function (req, res) {}
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

