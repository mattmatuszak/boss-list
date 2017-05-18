module.exports = (function(){
    return {
        allTasks: function(req, res){
            res.json({completed:false, description:'work being done', dueDate: new Date(), owner: 'collin', id: '1', submitDate: new Date()})
        }
    }
})();

