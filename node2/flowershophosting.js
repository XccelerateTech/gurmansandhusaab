var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    // respond to the request

    res.writeHead(200, { 'Content-Type':'text/html' });
    fs.readFile(__dirname +'/index.html','utf-8' ,(err,data) => {
        if (err){
            throw err;
        }
        else res.end(data);
    })

}).listen(8080, '127.0.0.1');