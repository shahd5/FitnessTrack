var express = require('express');  
var todoController = require('./server/todo-list');

var app = express();

//set up template engine
app.set('view engine','ejs');

//staic files
app.use(express.static('./client'));

todoController(app);

app.listen(3000);
console.log('you are listeining to port 3000');