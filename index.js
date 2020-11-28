var http = require('http');
var fs = require('fs');


http.createServer(function (request, response) {
    fs.readFile('./RecentTransaction.html', null, function (err, data) {
        if (err) {
            response.writeHead(404);
            response.write('Page not found!');
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.write(data);
            response.end()
        }
    });
}).listen(8080);
console.log('Server created!');