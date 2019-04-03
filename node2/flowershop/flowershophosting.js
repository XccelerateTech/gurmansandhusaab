var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    // respond to the request
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile(__dirname + '/exercisef.html', 'utf-8', (err, data) => {
            if (err) {
                throw err;
            }
            else res.end(data);
        })
    }
    else if(req.url == '/exercisef.css'){
        res.writeHead(200, { 'Content-Type': 'text/css' });
        fs.readFile(__dirname + '/exercisef.css', 'utf-8', (err, data) => {
            if (err) {
                throw err;
            }
            else res.end(data);
        })
    }
    else if(req.url == '/ExerciseH.js'){
        res.writeHead(200, { 'Content-Type': 'text/javasript' });
        fs.readFile(__dirname + '/ExerciseH.js',  (err, data) => {
            if (err) {
                throw err;
            }
            else res.end(data);
        })
    }
    else if(req.url == '/flower-icon.png'){
        res.writeHead(200, { 'Content-Type': 'image/png' });
        fs.readFile(__dirname + '/flower-icon.png', (err, data) => {
            if (err) {
                throw err;
            }
            else res.end(data);
        })
    }
    else if(req.url == '/flowershop.jpg'){
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        fs.readFile(__dirname + '/flowershop.jpg', (err, data) => {
            if (err) {
                throw err;
            }
            else res.end(data);
        })
    }
    else if(req.url == '/logo.png'){
        res.writeHead(200, { 'Content-Type': 'image/png' });
        fs.readFile(__dirname + '/logo.png',  (err, data) => {
            if (err) {
                throw err;
            }
            else res.end(data);
        })
    }

    else if(req.url == '/payment-icon.png'){
        res.writeHead(200, { 'Content-Type': 'image/png'});
        fs.readFile(__dirname + '/payment-icon.png', (err, data) => {
            if (err) {
                throw err;
            }
            else res.end(data);
        })
    }

    else if(req.url == '/phone-icon.png'){
        res.writeHead(200, { 'Content-Type': 'image/png' });
        fs.readFile(__dirname + '/phone-icon.png',  (err, data) => {
            if (err) {
                throw err;
            }
            else res.end(data);
        })
    }
    else if(req.url == '/truck-icon.png'){
        res.writeHead(200, { 'Content-Type': 'image/png' });
        fs.readFile(__dirname + '/truck-icon.png', (err, data) => {
            if (err) {
                throw err;
            }
            else res.end(data);
        })
    }

}).listen(8080, '127.0.0.1');