var http = require("http");
var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/clientsandservers.txt", "utf8");
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

myReadStream.on("data", function(chunk){
	console.log("new chunk received:");
	myWriteStream.write(chunk,)
	// console.log(chunk);
});







// var http = require("http");

// var server = http.createServer(function(req, res){
// 	console.log("request was made: " + req.url);
// 	res.writeHead(200, {"Content-Type": "text/plain"});
// 	res.end("Hey ninjas");
// });

// server.listen(8080, "0.0.0.0");
// console.log("yo dawgs, now listening to port 8080");

