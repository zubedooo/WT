var express = require('express')
var app = express()
app.get('/', function(req, res) {
    res.send("5 colleges" + '<br><a href="/1.html">College A</a>' + '<br><a href="/2.html">College B</a>' + '<br><a href="/3.html">College C</a>' + '<br><a href="/4.html">College D</a>' + '<br><a href="/5.html">College E</a>');
});
app.get('/1.html', function(req, res) {
    res.sendFile(__dirname+'/1.html');
});
app.get('/2.html', function(req, res) {
    res.sendFile(__dirname+'/2.html');
});
app.get('/3.html', function(req, res) {
    res.sendFile(__dirname+'/3.html');
});
app.get('/4.html', function(req, res) {
    res.sendFile(__dirname+'/4.html');
});
app.get('/5.html', function(req, res) {
    res.sendFile(__dirname+'/5.html');
});
var server = app.listen(5000, function() {
    console.log("serving at http://localhost:5000");
});
