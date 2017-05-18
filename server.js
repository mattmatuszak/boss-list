var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');
var port = 4000;
app.use(express.static(path.join(__dirname , 'client')));
app.use(bp.urlencoded({extended:true}));
require('./server/config/routes.js')(app);


app.listen(port, function(){
    console.log("We running dis server yall")
})