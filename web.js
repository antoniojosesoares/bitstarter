
var express = require('express');

var app = express.createServer(express.logger());

var content = 'Treta';

var buf = new Buffer(16);

fs.readFile('./index.html', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;

});


app.get('/', function(request, response) {
  buf.write('AJ', 'utf-8');
  response.send(buf.toString('utf-8');
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
