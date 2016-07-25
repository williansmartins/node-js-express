var mysql = require('mysql');

var connectMYSQL = function(){	
	return connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'academia'
	}); 
}

module.exports = function(){		
	return connectMYSQL; 
}