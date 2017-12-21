var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();

var listofexe = [{morning:'push-up',evening:'jump'},{morning:'jogging',evening:'running'}];

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();
});


app.get("/list",(req,res)=>{
    res.json(listofexe);
})




app.listen(3000);
console.log("server running on port 3000");
module.exports = app;

