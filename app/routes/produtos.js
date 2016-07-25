module.exports = function(app){
	app.get('/produtos', function(req, res){
		var connection = app.infra.connectionFactory();
		var ProdutosDAO = new app.infra.ProdutosDAO(connection);

		ProdutosDAO.lista(function(err, results) {
		  res.render('produtos/lista', {lista:results});
		});

		connection.end();
	});

	app.get('/produtos/form', function(req, res){
	  	res.render('produtos/form');
	});

	app.get('/produtos/salva', function(req, res){
		var connection = app.infra.connectionFactory();
		var ProdutosDAO = new app.infra.ProdutosDAO(connection);

		ProdutosDAO.salva(function(err, results) {
		  res.render('produtos/lista', {lista:results});
		});

		connection.end();
	});
}