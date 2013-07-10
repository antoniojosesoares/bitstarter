
var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer(16);


app.get('/', function(request, response) {
  buf.write('AJ', 'utf-8');
  response.send(buf.toString('utf-8'));
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
