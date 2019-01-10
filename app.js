var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
	console.log("request was made: " + req.url);
	res.writeHead(200, { "Content-Type": "text/plain" });
	var myReadStream = fs.createReadStream(__dirname + "/clientsandservers.txt", "utf8");
	myReadStream.pipe(res);
});


server.listen(8080, "0.0.0.0");
console.log("yo dawgs, now listening to port 8080");
