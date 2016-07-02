var db = require('../db');
var Message = db.Message;
var User = db.User;

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (cb) {
      // console.log("Hello from GET");
      Message.findAll({
        attributes: ['username', 'message', 'roomname']
      }).then(function(messages){
        cb(messages);
      });

    },
    post: function (message, callback) {

      Message.create({
        message: message.message,
        username: message.username,
        roomname: message.roomname
      }).then(function(){
        callback();
      });


    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log("This is USERS GET model");
    },
    post: function (user, callback) {
      console.log("This is USERS POST model");

      User.create({
        username: user.username
      }).then(function(){
        callback();
      });

      // User.findAll({
      //   attributes: ['username'],
      //   where: { where: {username: user.username} }
      // }).then(function(){
      //   callback();
      // });


    }
  }
};
