var mysql = require('mysql');
var Sequelize = require('sequelize');
var db = new Sequelize('chatter', 'root', '');

// The Message Schema
var Message = db.define('Message', {
  username: Sequelize.STRING,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
}, {
  timestamps: false
});

// The User Schema
var User = db.define('User', {
  username: Sequelize.INTEGER
}, {
  timestamps: false
});

// Declare Relationships between Models
User.hasMany(Message);
Message.belongsTo(User);

// This will create any missing tables
User.sync();
Message.sync();

// We have access to the User and Message anywhere
exports.User = User;
exports.Message = Message;