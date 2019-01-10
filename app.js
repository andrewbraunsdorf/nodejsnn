var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
	console.log("request was made: " + req.url);
	res.writeHead(200, { "Content-Type": "application/json" });
	var myObj = {
		name: "ryu",
		job: "Ninja",
		age: 29
	};
	res.end(JSON.stringify(myObj));
});


server.listen(8080, "0.0.0.0");
console.log("yo dawgs, now listening to port 8080");

	// var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
	// myReadStream.pipe(res);
