module.exports = function(){
	this.lista = function(connection, callback){
		connection.query('select * from aluno', callback);
	}
	return this;
}