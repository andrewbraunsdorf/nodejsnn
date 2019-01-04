console.log(__dirname);
console.log(__filename);

var time =0;

setInterval(function(){
    time += 2;
    console.log(time + " seconds have passed");
}, 2000);








// var fs = require('fs');

// var file = fs.readFile('input.txt','utf8',function(err,data){
//     fs.writeFile('writeme.txt',data);
//     console.log(data);
// });

// console.log('This is an instruction outside the sync file system.');