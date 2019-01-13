var bodyParser = require("body-parser"); 
var mongoose = require("mongoose");

//Connect to mLab database
//added , { useNewUrlParser: true } to eliminate node: 5128 error 
mongoose.connect("mongodb://testapp1:testapp1@ds155774.mlab.com:55774/todoapp", { useNewUrlParser: true });

//Create a schema - this is like a blueprint for our data
var todoSchema = new mongoose.Schema({
	item: String
});

var Todo =mongoose.model("Todo", todoSchema);


//var data = [{item: "get milk"}, {item: "walk dog"}, {item: "kick some coding ass"}];
var urlencodedParser =bodyParser.urlencoded({extended: false});

module.exports = function(app){

app.get("/todo", function(req, res){
	//get data from mongodb and pass it to view
	Todo.find({}, function(err, data){
		if (err) throw err;
		res.render("todo", {todos: data});
	});
	
});

app.post("/todo", urlencodedParser, function(req, res){
	//get data from the view and add it to mongodb
	var newTodo = Todo(req.body).save(function(err, data){
		if (err) throw err;
		res.json(data);
	});
});

app.delete("/todo/:item", function(req, res){
	//delete the requested item from mongodb
	//instead of .remove used ((node:7941) DeprecationWarning: collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead.)
	Todo.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne(function(err, data){
		if (err) throw err;
		res.json(data);
	});
});

};



// var Todo =mongoose.model("Todo", todoSchema);
// // var itemOne = Todo({item: "buy flowers"}).save(function(err){
// // 	if (err) throw err;
// // 	console.log("item saved");
// // });