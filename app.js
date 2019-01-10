var http = require("http");

var server = http.createServer(function(req, res){
	console.log("request was made: " + req.url);
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Hey ninjas");
});

server.listen(8080, "0.0.0.0");
console.log("yo dawgs, now listening to port 8080");

// var http = require("http");

// var server = http.createServer(function(req, res){
// 	res.writeHead(200, {"Content-Type": "text/plain"});
// 	res.end("Hey ninjas");
// });

// server.listen(8080, "35.184.86.113");
// console.log("yo dawgs, now listening to port 8080");