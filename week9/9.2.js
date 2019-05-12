var http = require('http');
var fs = require('fs');

fs.appendFile('file1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
fs.open('file2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

fs.writeFile('file3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
http.createServer(function (req, res) {
  fs.readFile('demo.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8081);
