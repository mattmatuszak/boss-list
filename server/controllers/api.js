var taskList = [];
module.exports = (function(){
    return {
        allTasks: function(req, res){
            res.json(taskList);
        },
        addTask: function(req, res){
            var id = Math.floor((Math.random() * 1000) + 1);
            req.body.id = id;
            req.body.submitdate = new Date();
            taskList.push(req.body);
            res.json(req.body);
        
        }
    }
})();

