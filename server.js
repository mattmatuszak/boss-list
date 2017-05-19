var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');
var port = 4000;

app.use(express.static(path.join(__dirname, 'client')));
app.use(bp.urlencoded({ extended: true }));
app.use('/js', express.static(path.join(__dirname, 'node_modules/socket.io-client/dist')))

require('./server/config/routes.js')(app);

var server = app.listen(port, function() {
  console.log("We running dis server yall")
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  console.log("WE ARE USING SOCKETS!");
  console.log(`socket id:${socket.id}`);
  //all the socket code goes in here!

  socket.on("allTableDataLoaded", function(data) {
    console.log('Loaded all the data and setup their socker!  Reason: ' + data.reason);
    socket.emit('allTableDataLoadedResponse', {
      response: "great, I'm glad this worked out for you!"
    });
  });



});
