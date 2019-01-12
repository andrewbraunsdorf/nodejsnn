var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use("/assets", express.static("stuff"));


app.get("/", function(req, res){
	res.render("index");	
});

app.get("/contact", function(req, res){
	res.render("contact");
});

app.get("/profile/:name", function(req, res){
	var data = {age: 29, job: "ninja", hobbies: ["eating", "fighting", "fishing"]};
	res.render("profile", {person: req.params.name, data: data});
});

app.listen(8080);


// app.use("/assets", function(req, res, next){
// 	console.log(req.url);
// 	next();
// });