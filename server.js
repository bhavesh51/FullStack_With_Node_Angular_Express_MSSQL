'use strict';
//var http = require('http');
var bodyParser = require("body-parser");
var path = require('path');
var express = require('express');
var app = express();
var port = process.env.port || 5678;

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Serve Static Files
app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'dist/index.html')));
//Router Middleware
app.use('/', require('./data/userService/userDataService'));

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

 app.get('/*', function (req, res) {
     res.sendFile(path.resolve('./src/index.html'));
 });

 app.get('*', (req, res) =>{
     res.sendFile(path.join(__dirname, 'src/index.html'))
 });

app.get('/*', function (req, res) {
    res.render('error');
});

var server = app.listen(port, function () {
    console.log('Node server is running on port..' + port);
});



// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false })); 
// app.use(express.static(path.join(__dirname, 'dist'))); // Point static path to dist
 
// app.use('/api', api); // Set our api routes 
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// }); //Catch all other routes and return the index file

// Angular DIST output folder
//app.use(express.static(path.join(__dirname, 'dist')));