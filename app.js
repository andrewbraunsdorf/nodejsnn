var fs = require("fs");

//Asyncronyus 
fs.unlink("./stuff/writeMe.txt", function(){
	fs.rmdir("stuff");	
});

//cannot remove dir without it being empty


// fs.mkdir("stuff", function(){
// 	fs.readFile("readMe.txt", "utf8", function(err, data){
// 		fs.writeFile("./stuff/writeMe.txt", data);
// 	});
// });

//Syncronyus Version
// fs.mkdirSync("stuff");
// fs.rmdirSync("stuff");