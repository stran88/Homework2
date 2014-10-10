var fs = require('fs');

var file = process.argv[2];

var read = fs.readFile(file, 'utf-8', function(error, data){
	if(error) throw err;
	
	countNewLines(data);
	});

function countNewLines(f){
	var count = f.split('\n').length - 1; // split string by \n and subtract 1
	console.log(count);
}