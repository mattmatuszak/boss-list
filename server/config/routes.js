var api = require('../controllers/api.js')
var mysocket = {message: 'dummyobject'};

module.exports = function(app, io) {

  io.sockets.on('connection', function(socket) {
    console.log("WE ARE USING SOCKETS!");
    console.log(`socket id:${socket.id}`);
    //all the socket code goes in here!
    mysocket = socket;

    socket.on("allTableDataLoaded", function(data) {
      console.log('Loaded all the data and setup their socker!  Reason: ' + data.reason);
      socket.emit('allTableDataLoadedResponse', {
        response: "great, I'm glad this worked out for you!"
      });
    });
  });



  app.get('/api/v1/tasks', function(request, response) {
    api.allTasks(request, response);
  });

  app.post('/api/v1/tasks', function(request, response, next) {
    api.addTask(request, response);
    next();
  }, function(request, response, next) {
    console.log('after tasks post with data' + JSON.stringify(response.req.body));
    mysocket.broadcast.emit('newTask', response.req.body);
    next();
  });
};
