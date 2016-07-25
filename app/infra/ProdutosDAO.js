function ProdutosDAO(connection){
	this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
	this._connection.query('select * from aluno', callback);
}

ProdutosDAO.prototype.salva = function(callback){
	this._connection.query('select * from aluno', callback);
}

module.exports = function(){
	return ProdutosDAO;
}