var lineReader = require('line-reader');

lineReader.eachLine('arquivo.txt', function(line, last) {

	console.log("--");
	console.log(line);
	// do whatever you want with line...
	if(last){
		// or check if it's the last one
		console.info("final do arquivo");
	}
});