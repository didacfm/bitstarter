var express = require('express');


var sys = require('sys'),
    index;
var fs = require('fs');
 
fs.readFile('./index.html', function (err, data) {
    if (err) {
        throw err;
    }
    index = data;
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.write(index);
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
