var api = require('../controllers/api.js')

module.exports = function(app){
    app.get('/api/v1/tasks', api.allTasks);

    app.post('/api/v1/tasks', api.addTask);
};