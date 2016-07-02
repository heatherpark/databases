// YOUR CODE HERE:

$(document).ready(function () {
  var app = {
  server:'http://127.0.0.1:3000',
  roomname: "lobby",
  friends: {},
  username: window.location.search.slice(10),
  init: function(){
    app.fetch();
    // app.getRooms();
    app.changeRooms();
    // app.createRooms();
    app.addFriend();
    app.handleSubmit();
  },
  send: function(message){
    $.ajax({
      url: app.server + '/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent. Data: ', this.data);
        // If message is sent successfully
        // Clear the chat div and fetch the new messages
        app.clearMessages();
        app.fetch();
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message. Error: ', data);
      }
    });
  },
  fetch: function(){
    $.ajax({
      url: app.server + '/classes/messages',
      type: 'GET',
      // Fetch the data from latest to oldest
      // Set the limit to 100 max
      data: {
        order: '-createdAt',
        limit: 100
      },
      contentType: 'application/json',
      success: function (data) {
        console.log("Fetching....");

        // If messages are received successfully
        // Loop over the data and add the message in the relevant room

        var messages = data;

        for(var i = messages.length - 1; i >= 0; i--){
          var message = messages[i];
           if(message.roomname === app.roomname){
            app.addMessage(message);
          }
        }
      },
      error: function (data) {
        console.log(data);

        console.error('chatterbox: Failed to receive message. Error: ', data);
      }
    });
  },
  clearMessages: function(){
    // We clear the chats div
    var chatDivs = $('#chats').find('.chat');

    // Slowly hide and clear the chat messages
    chatDivs.hide("slow", function(){
      $(this).remove();
    });
  },
  addMessage: function(message){
    // Before appending, we should check if the message contains any special characters and sanitize
    // Otherwise we'll get hacked :)
    // Please check sanitize() for more info

    console.log(message);
    //  We only append if there is text
    if(message.message){
      // We run our text through the sanitization process
      var text = app.sanitize(message.message);

      // We check if the username is one of our friends
      // If so, we give it a bold style
      if(app.friends[message.username]){
        var $text = '<span class="bold">' + text + '</span>';
      } else {
        var $text = '<span>' + text + '</span>';
      }

      // Append our message to the chats div
      var $output = $('<div class="chat"><span class="username">' + message.username + '</span>: ' + $text + '</div>');
      $('#chats').append($output);
    }

  },
  addRoom: function(roomname){

  var $output;

   // We add a 'selected' attribute to our current roomname
   // Otherwise, it will be a regular option
   if(roomname === app.roomname){
    $output = $('<option selected>' + roomname + '</option>');
   } else {
    $output = $('<option>' + roomname + '</option>');
   };

   // We set the option value to the current roomname
    $output.attr("value", function(){
      return roomname;
    });

    // We append our new room to the dropdown menu
    $('#roomSelect').append($output);
  },
  createRooms: function(){

    // We create an empty room object
    var newRoom = {};

    // When the "Add a New Room" button is clicked
    // We show our controls
    $('#newRoom').on('click',function(){
      $('#roomControls').removeClass('hidden');
    });

    // When we click "confirm"
    // We send our new room to the server via a POST request
    $('#newRoomConfirm').on('click',function(e){
      e.preventDefault();

      var roomName = $('#newRoomName').val();
      newRoom.username = app.username;
      newRoom.roomname = roomName;
      $.ajax({
        url: app.server,
        type: 'POST',
        data: JSON.stringify(newRoom),
        contentType: 'application/json',
        success: function (data) {
          app.clearMessages();
          app.roomname = roomName;
          app.getRooms();
          app.fetch();
        },
        error: function (data) {
          console.error('chatterbox: Failed to send message. Error: ', data);
        }
      });

      // When we're done adding the new room, we hide the controls again
      $('#roomControls').addClass('hidden');
    })
  },
  // This function will get the rooms from the server
  getRooms: function(){
    // This GET request fetches the current rooms from our server
    $.ajax({
      url: app.server,
      type: 'GET',
      // Fetch the data from latest to oldest
      // Set the limit to 100 max
      data: {
        order: '-createdAt',
        limit: 100
      },
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message received. Data: ', data);
        // Create a room object to containa all the unique rooms
        var rooms = {};

        data = JSON.parse(data);

        // Loop over the data and sanitize the roomnames
        _.each(data.results,function(message){

           // We check if roomname is not undefined or null
           if(message.roomname){
              // We sanitize the roomname from harmful characters
              var room = app.sanitize(message.roomname);
              // We add our room to the object
              rooms[room] = room;
           }
        });

        // Only add the unique rooms to our dropdown menu
        _.each(rooms,function(room){
          app.addRoom(room)
        });
      },
      error: function (data) {
        console.error('chatterbox: Failed to receive message. Error: ', data);
      }
    });
  },
  changeRooms: function(){
    // When a selection is made in our dropdown menu
    // We clear the div, fetch the messages
    $('#roomSelect').change(function(){
      app.roomname = app.sanitize(this.value);
      app.clearMessages();
      app.fetch();
    })
  },
  addFriend: function(){
    // When we click on a username in the chat div
    // We add the new friend to the global friends object
    $('#chats').on('click','.username',function(){
      var friend = $(this).text();
      app.friends[friend] = friend;

      // Display a flash message
      console.log("You have added " + friend + " as a friend");
    });

  },
  handleSubmit: function(){

     // When a message is submitted
     // The click handler sends the message
    $('.submit').click(function(e){
      // Prevent default
      e.preventDefault();

      var message = {};

      // Get the message from the input box
      message.message = $('#message').val();
      message.username = app.username;
      message.roomname = app.roomname;

      // Reset the input box
      $('#message').val("");

      // Use the send method to send the message
      app.send(message);

    });

  },
  // This function will escape any crazy characters :)
  sanitize: function(string){
    // We use a regular expression to replace any special characters
      return String(string).replace(/[&]/g, 'x');
  }
};


// Intialize our app for the first time
app.init();

// Fetch and clear every 5 seconds
setInterval(function(){
  app.clearMessages();
  app.fetch();
},10000)




}); // End of document ready function









